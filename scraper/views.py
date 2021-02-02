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

# VIDEOS VIEW


# def videos(request):
#     form = VideoForm()
#     context = {'form': form}

#     return render(request, 'scraper/videos.html', context)


def download(request, slug):
    download = TwitterVideo.objects.get(slug=slug)

    question_separated_strings = download.url.split('?')
    stroke_separated_strings = question_separated_strings[0].split('/')
    period_separated_strings = stroke_separated_strings[-1].split('.')
    extension = period_separated_strings[-1]
    link = period_separated_strings[0]

    context = {'download': download, 'extension': extension, 'link': link}

    return render(request, 'scraper/download.html', context)
