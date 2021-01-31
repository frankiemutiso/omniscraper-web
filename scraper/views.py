from django.shortcuts import render

from .forms import VideoForm

# HOME VIEW


def home(request):
    context = {}
    return render(request, 'scraper/home.html', context)

# THREADS VIEW


def threads(request):
    context = {}
    return render(request, 'scraper/threads.html')

# VIDEOS VIEW


def videos(request):
    form = VideoForm()
    context = {'form': form}

    return render(request, 'scraper/videos.html', context)
