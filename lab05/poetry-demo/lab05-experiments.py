import requests
from bs4 import BeautifulSoup

def main():
    print("hello world")
    # user_agent makes it seem like the request is coming from a web browser (versus a bot)
user_agent = {'User-agent': 'Mozilla/5.0'}
response = requests.get("https://new.cs.unca.edu/", headers=user_agent)
print(response.content)

soup = BeautifulSoup(response.content, 'html.parser')
        
        # Find all anchor tags
links = soup.find_all('a')
        
        # Extract and print the href attributes
print("\nExtracted URLs:")
for link in links:
        href = link.get('href')
        if href:
            print(href)
if __name__ == "__main__":
    main()