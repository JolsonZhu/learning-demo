from urllib.request import urlopen, Request
from html.parser import HTMLParser

class MovieParser(HTMLParser):
    def __init__(self):
        HTMLParser.__init__(self)
        self.movies = []

    def handle_starttag(self, tag, attrs):
        def _attr(attrlist, attrname):
            for attr in attrlist:
                if attr[0] == attrname:
                    return attr[1]
            return None

        if tag == 'li' and _attr(attrs, 'data-title'):
            movie = {}
            movie['title'] = _attr(attrs, 'data-title')
            movie['score'] = _attr(attrs, 'data-rate')
            movie['director'] = _attr(attrs, 'data-director')
            movie['actors'] = _attr(attrs, 'data-actors')
            self.movies.append(movie)
            print('%s | %s | %s | %s' % (movie['title'], movie['score'], movie['director'], movie['actors']))

def nowplaying_movies(url):
    headers = {'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/51.0.2704.103 Safari/537.36'}
    req = Request(url, headers=headers)
    s = urlopen(req)
    parser = MovieParser()
    parser.feed(s.read().decode('utf-8'))
    s.close()
    return parser.movies

if __name__ == '__main__':
    url = 'http://movie.douban.com/'
    movies = nowplaying_movies(url)

    import json
    print('%s' % json.dumps(movies, indent=4, separators=(',', ': ')))
