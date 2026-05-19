from django.shortcuts import render


def home(request):
    projects = [
        {
            'title': 'Personal Portfolio',
            'description': 'A clean Django portfolio website with responsive HTML, CSS, and JavaScript.',
            'tech': 'Django, HTML, CSS, JS',
        },
        {
            'title': 'Task Dashboard',
            'description': 'A simple dashboard concept for tracking tasks, status, and progress.',
            'tech': 'Python, SQLite, Bootstrap',
        },
        {
            'title': 'Blog Starter',
            'description': 'A lightweight blog layout ready for posts, categories, and contact links.',
            'tech': 'Django Templates, CSS',
        },
    ]

    skills = ['Python', 'Django', 'HTML', 'CSS', 'JavaScript', 'SQLite']

    return render(
        request,
        'portfolio/home.html',
        {
            'name': 'Your Name',
            'role': 'Python Django Developer',
            'projects': projects,
            'skills': skills,
        },
    )

# Create your views here.
