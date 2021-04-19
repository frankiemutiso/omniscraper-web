from django.shortcuts import render, redirect
from django.views.generic.list import ListView

from .models import TwitterVideo

# HOME VIEW


class HomeView(ListView):
    # queryset = TwitterVideo.objects.exclude(url__regex=r"m3u8\?tag=\d+$")
    queryset = TwitterVideo.objects.exclude(flagged=True)
    context_object_name = 'videos'
    paginate_by = 4
    template_name = 'scraper/home.html'
    ordering = '-date_saved_utc'


# DOWNLOADS VIEW


def download(request, slug):
    try:
        # Get the video with the given slug
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
        elif extension == "m3u8":
            mime = "application/x-mpegURL"
        else:
            mime = "video/mp4"

        context = {'download': download, 'mime': mime,
                   'extension': extension, 'link': link}

        return render(request, 'scraper/download.html', context)
    except Exception as error:
        context = {'error': error}
        return render(request, 'scraper/download.html', context)


# def flag(request, id):
#     if request.method == 'POST':
#         flag_video = TwitterVideo.objects.get(id=id)
#         flag_video.flagged = True

#         flag_video.save()

#         return redirect('home')
