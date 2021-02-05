from django.shortcuts import render
from .models import TwitterVideo
from .forms import VideoForm

# HOME VIEW


def home(request):
    last_4_videos = TwitterVideo.objects.order_by('-date_processed_utc')[:4]

    context = {'last_4_videos': last_4_videos}
    return render(request, 'scraper/home.html', context)

# THREADS VIEW


def threads(request):
    context = {}
    return render(request, 'scraper/threads.html')


def download(request, slug):
    try:
        download = TwitterVideo.objects.get(slug=slug)

        # Get extension from the url
        question_separated_strings = download.url.split('?')
        stroke_separated_strings = question_separated_strings[0].split('/')
        period_separated_strings = stroke_separated_strings[-1].split('.')
        extension = period_separated_strings[-1]
        link = period_separated_strings[0]

        # Depending on extension. Provide suitable MIME Type
        if extension == "mov":
            mime = "video/quicktime"
        elif extension == 'm3u8':
            mime = 'application/x-mpegURL'
        else:
            mime = "video/mp4"

        context = {'download': download, 'mime': mime, 'extension': extension, 'link': link}

        return render(request, 'scraper/download.html', context)
    except Exception as error:
        context = {'error': error}
        return render(request, 'scraper/download.html', context)
