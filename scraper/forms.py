from django import forms


class VideoForm(forms.Form):
    video_url = forms.URLField(max_length=100, required=True, widget=forms.URLInput(
        attrs={'placeholder': 'Paste tweet link here...', 'class': 'form-textfield'}))
