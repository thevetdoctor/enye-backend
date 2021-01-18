# ENYE CHALLENGE 5.0

###  BACKEND API


### Purpose

In this challenge, the goal is to examine your back-end skills in creating the backbone structure of an application

### Currency Rates API

You have been tasked with creating a service integration to a public API and exposing a RESTful endpoint. The endpoint will accept requests and returns a modified response schema from the integrated API.

Your application must integrate with the [Exchange Rate API](https://api.exchangeratesapi.io/latest) to proxy requests 

- Your REST endpoint `/api/rates` **must** return a JSON object of the latest currency rates in the following format/schema:

```jsx
{
    "results": {
        "base": "",
        "date": "",
        "rates": {
        }
    }
}
```

### Recommended Technology

It is highly recommended that you leverage Node/Express for this challenge. However, you can use which ever backend technology you feel most comfortable with.

- [ExpressJS](https://expressjs.com/)

### Tasks

1. Create an endpoint that accepts a `GET` request to `/api/rates`
2. The `/api/rates` endpoint must accept the following request query parameter strings
    1. **base**: the home currency rates to be quoted against (i.e. `CZK`)
    2. **currency**: the specific exchange rates based on a comma-separated symbols parameter (i.e. `EUR,GBP,USD`).
3. You can assume standard HTTP status codes on the response. If a request is unsuccessful, your application must properly handle it accordingly with the appropriate status codes
4. Upon a successful API response, transform the fetched payload into an object containing the following keys:
    1. **results**: JSON object containing the results from the API
    2. **base**: the requested home rate from the request URL query strings
    3. **date**: the current date 
    4. **rates**: An Object containing the requested currency in the request URL query strings
5. Your application server must be written with Node using an Express server ([https://expressjs.com/](https://expressjs.com/))
6. You **must** deploy your backend code

---

As an example, a request to fetch the currency exchange rates from `CZK` to `EUR,GBP,USD`  might look like:

```jsx
/api/rates?base=CZK&currency=EUR,GBP,USD
```

A successful response for the above request should return the following schema (of course with a more up-to-date values)

```jsx
{
    "results": {
        "base": "CZK",
        "date": "2020-11-17",
        "rates": {
            "EUR": 0.0377244605,
            "GBP": 0.033795458,
            "USD": 0.044824204
        }
    }
}
```

### Submission

You must submit a link to the client and to the Github code **7 days** after applying to the program. Failure to do so would result in your disqualification.

- [Submission Link](https://airtable.com/shrZUGXL4dCK9v05c)

### Resources

- [RESTful API](https://searchapparchitecture.techtarget.com/definition/RESTful-API#:~:text=A%20RESTful%20API%20is%20an,deleting%20of%20operations%20concerning%20resources.)
- [What is JSON?](https://beginnersbook.com/2015/04/json-tutorial/)
- [Url Query Parameters](https://support.clickmeter.com/hc/en-us/articles/211032666-URL-parameters-How-to-pass-it-to-the-destination-URL)
- [Query Parameters in ExpressJS](https://medium.com/javascript-in-plain-english/query-strings-url-parameters-d1a35b9a694f)
- [Top Platforms for App Deployment](https://blog.newrelic.com/engineering/cloud-application-deployment-tools/)
- Exchange Rate API ⇒ [https://api.exchangeratesapi.io/latest](https://api.exchangeratesapi.io/latest)
- Exchange Rate API docs: [https://exchangeratesapi.io/](https://exchangeratesapi.io/)

