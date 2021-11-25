# HiPeople recruitment task (image search)
Single-page application to search for images using Unsplash API.

https://hi-people-image-search.vercel.app


### Technologies
* `React`
* `Typescript`
* `Unsplash`


### Pre steps
1. Clone down repo
2. Install `yarn` with `brew install yarn`
3. Install eslint globally `yarn global add eslint`

### Local setup
1. Run `yarn install`
3. QA your code by running `yarn lint`
4. Run locally using `yarn start`

# Usage
The application is a simple search engine running the query/search string typed by the user in the input field atop.
The search has a `300ms` debounce to ensure no overload of API requests while user is typing.
For simplicity reasons for this task only string search is available, and only the top 50 results will be shown
Further development would implement search queries such as `color` and `orientation` as well as a pagination with either `infinite scroll` or a paged state.

The Unsplash `ACCESS_KEY` needs to be provided personally by author of this repo in order for this to work locally.
