def handleRequest(request):
    return __new__(Response('Hello Worker Python', {
        'headers' : { 'content-type' : 'text/plain' }
    }))

addEventListener('fetch', (lambda event: event.respondWith(handleRequest(event.request))))
