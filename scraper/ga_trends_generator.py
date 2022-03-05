from apiclient.discovery import build
from oauth2client.service_account import ServiceAccountCredentials
import json
from omniscraper.settings import GA_JSON_FILE , VIEW_ID

SCOPES = ['https://www.googleapis.com/auth/analytics.readonly']

def initialize_analyticsreporting():
    """Initializes an Analytics Reporting API V4 service object.

    Returns:
    An authorized Analytics Reporting API V4 service object.
    """
    credentials = ServiceAccountCredentials.from_json_keyfile_dict(json.loads(GA_JSON_FILE), SCOPES)

    # Build the service object.
    analytics = build('analyticsreporting', 'v4', credentials=credentials)

    return analytics


def get_report(analytics):
    """Queries the Analytics Reporting API V4.

    Args:
    analytics: An authorized Analytics Reporting API V4 service object.
    Returns:
    The Analytics Reporting API V4 response.
    """
    return analytics.reports().batchGet(
        body={
        'reportRequests': [
        {
            'viewId': VIEW_ID,
            'dateRanges': [{'startDate': '7daysAgo', 'endDate': 'today'}],
            'metrics': [{'expression': 'ga:pageviews'}],
            'orderBys': [{'fieldName': 'ga:pageviews', 'sortOrder': 'DESCENDING'}],
            'dimensions': [{'name': 'ga:pagePath'}],
            'dimensionFilterClauses': 
                [
                    {
                        'filters': 
                            [ 
                                {
                                    'dimensionName': 'ga:pagePath',
                                    'not': True, 
                                    'operator': 'EXACT', 
                                    'expressions': '/'
                                },
                               
                             ]
                        }, 
                    {
                        'filters': 
                            [
                                {    
                                    'dimensionName': 'ga:pagePath',
                                    'not': True, 
                                    'operator': 'PARTIAL', 
                                    'expressions': 'tags'
                                }
                            ]\
                    }
                 ],
            "pageSize": "10",
        }]
        }
    ).execute()


def package_response(response):
    """Parses and prints the Analytics Reporting API V4 response.

    Args:
    response: An Analytics Reporting API V4 response.
    """
    for report in response.get('reports', []):
        columnHeader = report.get('columnHeader', {})
        dimensionHeaders = columnHeader.get('dimensions', [])
        metricHeaders = columnHeader.get('metricHeader', {}).get('metricHeaderEntries', [])
        
        trending_paths = []
        for row in report.get('data', {}).get('rows', []):
            dimensions = row.get('dimensions', [])
            dateRangeValues = row.get('metrics', [])

            for header, dimension in zip(dimensionHeaders, dimensions):   
                list_item_dict = {}            

                for  values in dateRangeValues:
                    for metricHeader, value in zip(metricHeaders, values.get('values')):
                
                        list_item_dict['path'] = dimension[1:]
                        list_item_dict['path_views'] = int(value)
                        trending_paths.append(list_item_dict)
        
        return trending_paths
            
