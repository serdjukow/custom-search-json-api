# Custom Search JSON API

## [Demo](https://serdjukow.github.io/custom-search-json-api 'Custom Search JSON API') Custom Search JSON API

![Alt text](images/demo.png 'Можно задать title')

### **Tamplate Url:**

### https://www.googleapis.com/customsearch/v1

-   _q={searchTerms}_
-   _&num={count?}_
-   _&start={startIndex?}_
-   _&safe={safe?}_
-   _&cx={cx?}_
-   _&sort={sort?}_
-   _&filter={filter?}_
-   _&gl={gl?}_
-   _&cr={cr?}_
-   _&googlehost={googleHost?}_
-   _&c2coff={disableCnTwTranslation?}_
-   _&hq={hq?}_
-   _&hl={hl?}_
-   _&siteSearch={siteSearch?}_
-   _&siteSearchFilter={siteSearchFilter?}_
-   _&exactTerms={exactTerms?}_
-   _&excludeTerms={excludeTerms?}_
-   _&linkSite={linkSite?}_
-   _&orTerms={orTerms?}_
-   _&relatedSite={relatedSite?}_
-   _&dateRestrict={dateRestrict?}_
-   _&lowRange={lowRange?}_
-   _&highRange={highRange?}_
-   _&searchType={searchType}_
-   _&fileType={fileType?}_
-   _&rights={rights?}_
-   _&imgSize={imgSize?}_
-   _&imgType={imgType?}_
-   _&imgColorType={imgColorType?}_
-   _&imgDominantColor={imgDominantColor?}_
-   _&alt=json_
-   _&lr=lang_de_
-   _&lr={language?}_
-   _&searchType=image_
-   _&fileType=jpg_
-   _&imgSize=medium_
-   _&alt=json_
-   _&sort=date_

## JSON response

```json
{
	"kind": "customsearch#search",
	"url": {
		"type": "application/json",
		"template": "https://www.googleapis.com/customsearch/v1?q={searchTerms}&num={count?}&start={startIndex?}&lr={language?}&safe={safe?}&cx={cx?}&cref={cref?}&sort={sort?}&filter={filter?}&gl={gl?}&cr={cr?}&googlehost={googleHost?}&c2coff={disableCnTwTranslation?}&hq={hq?}&hl={hl?}&siteSearch={siteSearch?}&siteSearchFilter={siteSearchFilter?}&exactTerms={exactTerms?}&excludeTerms={excludeTerms?}&linkSite={linkSite?}&orTerms={orTerms?}&relatedSite={relatedSite?}&dateRestrict={dateRestrict?}&lowRange={lowRange?}&highRange={highRange?}&searchType={searchType}&fileType={fileType?}&rights={rights?}&imgSize={imgSize?}&imgType={imgType?}&imgColorType={imgColorType?}&imgDominantColor={imgDominantColor?}&alt=json"
	},
	"queries": {
		"nextPage": [
			{
				"title": "Google Custom Search - Testing",
				"totalResults": "2900",
				"searchTerms": "Testing",
				"count": 10,
				"startIndex": 11,
				"inputEncoding": "utf8",
				"outputEncoding": "utf8",
				"safe": "off",
				"cx": "MY_SEARCH_ENGINE_ID"
			}
		],
		"request": [
			{
				"title": "Google Custom Search - Testing",
				"totalResults": "2900",
				"searchTerms": "Testing",
				"count": 10,
				"startIndex": 1,
				"inputEncoding": "utf8",
				"outputEncoding": "utf8",
				"safe": "off",
				"cx": "MY_SEARCH_ENGINE_ID"
			}
		]
	},
	"context": {
		"title": "Test Search Engine"
	},
	"searchInformation": {
		"searchTime": 0.299265,
		"formattedSearchTime": "0.30",
		"totalResults": "2900",
		"formattedTotalResults": "2,900"
	},
	"items": [
		// ... Search Result here
	]
}
```
