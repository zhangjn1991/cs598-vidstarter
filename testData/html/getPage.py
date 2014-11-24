from bs4 import BeautifulSoup

import urllib,json,codecs

def getJSON(url):
	soup = BeautifulSoup(urllib.urlopen(url))
	res = {};
	res['pageUrl'] = url
	res['video'] = url + '/widget/video.html'
	res['title'] = soup.select('.title .mb1 a')[0].contents[0]
	res['desc'] = soup.select('.short_blurb .h3')[0].contents[0]
	res['image'] = soup.select('.video-player')[0]['data-image']
	res['money'] = soup.select('#pledged')[0]['data-pledged']
	return res


def outputJSON(data):
	f = codecs.open('output.json','w','utf-8')
	f.write(json.dumps(data,ensure_ascii=False))
	f.close()

url = 'https://www.kickstarter.com/projects/1857140011/protestifytm-llc'

pages = []
pages.append(getJSON(url))

# soup = getJSON(url)

