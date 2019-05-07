# ![LOGO](logo.png) Browshot **flow**ground Connector

## Description

A generated **flow**ground connector for the Browshot API (version 1.17.0).

Generated from: https://api.apis.guru/v2/specs/browshot.com/1.17.0/swagger.json<br/>
Generated at: 2019-05-07T17:39:49+03:00

## API Description

Take screenshots of any website in real time

## Authorization

Supported authorization schemes:
- API Key
## Actions

### Get information about your account

> Get information about your account.

*Tags:* `Account`

#### Input Parameters
* `details` - _optional_ - level of information returned

### Requests thousands of screenshtos at once

> Get hundreds or thousands of screenshots from a text file. You can use this API call or the dashboard. Unlike the other API calls, you must issue a POST request with the Content-Type "multipart/form-data" in order to upload the text file. The text file must contain the list of URLs to request, 1 URL per line. Failed screenshots will be tried up to 3 times before giving up.

*Tags:* `Batch`

#### Input Parameters
* `hosting` - _optional_ - hosting option - s3 or browshot
    Possible values: s3.
* `hosting_height` - _optional_ - maximum height of the thumbnail to host
* `hosting_width` - _optional_ - maximum height of the thumbnail to host
* `hosting_scale` - _optional_ - scale of the thumbnail to host
* `hosting_bucket` - _optional_ - S3 bucket to upload the screenshot or thumbnail (required for S3)
* `hosting_file` - _optional_ - file name to use (for S3 only)
* `hosting_headers` - _optional_ - list of headers to add to the S3 object (for S3 only)

### Get the batch status

> Get the status of a batch requested through the API or through the dashboard.

*Tags:* `Batch`

#### Input Parameters
* `id` - _required_ - batch ID

### Get information about a browser

> Get information about a browser.

*Tags:* `Browser`

#### Input Parameters
* `id` - _required_ - browser ID

### Get all browsers

> Get all browsers.

*Tags:* `Browser`

### Get information about an instance

> Get information about an instance.

*Tags:* `Instance`

#### Input Parameters
* `id` - _required_ - instance ID

### Get all instances

> Get all instances.

*Tags:* `Instance`

### Request a screenshot

> Screenshots requests to private and shared instances require a positive balance.<br/>
> <br/>
> *IMPORTANT*: Remember that you can only do 100 free screenshots per month. To used a premium instance, use instance_id=65 for example.

*Tags:* `Screenshot`

#### Input Parameters
* `url` - _required_ - URL of the page to get a screenshot for
* `instance_id` - _required_ - instance ID to use
* `size` - _optional_ - screenshot size - "screen" (default) or "page"
    Possible values: screen, page.
* `cache` - _optional_ - use a previous screenshot (same URL, same instance) if it was done within <cache_value> seconds. The default value is 24hours. Specify cache=0 if you want a new screenshot.
* `delay` - _optional_ - number of seconds to wait after the page has loaded. This is used to let JavaScript run longer before taking the screenshot. Use delay=0 to take screenshots faster.
* `flash_delay` - _optional_ - number of seconds to wait after the page has loaded if Flash elements are present. Use flash_delay=0 to take screenshots faster.
* `screen_width` - _optional_ - width of the browser window. For desktop browsers only.
* `screen_height` - _optional_ - height of the browser window. For desktop browsers only. (Note: full-page screenshots can have a height of up to 15,000px)
* `priority` - _optional_ - assign priority to the screenshot (for private instances only)
* `referer` - _optional_ - use a custom referrer header - paid screenshots only
* `post_data` - _optional_ - send a POST requests with post_data, useful for filling out forms - paid screenshots only
* `cookie` - _optional_ - set a cookie for the URL requested (see Custom POST Data, Referer and Cookie) Cookies should be separated by a ; - paid screenshots only
* `script` - _optional_ - URL of javascript file to execute after the page load event
* `details` - _optional_ - level of information available with screenshot/info
* `html` - _optional_ - saves the HTML of the rendered page which can be retrieved by the API call screenshot/html. This feature costs *1 credit* per screenshot.
* `max_wait` - _optional_ - maximum number of seconds to wait before triggering the PageLoad event. Note that delay will still be used. (default: 0 = disabled)
* `headers` - _optional_ - any custom HTTP headers. (Not supported with Internet Explorer)
* `shots` - _optional_ - take multiple screenshots of the same page. This costs 1 additional credit for every 2 additional screenshots.
* `shot_interval` - _optional_ - number of seconds between 2 screenshots
* `hosting` - _optional_ - hosting option - s3 or browshot
    Possible values: s3, browshot.
* `hosting_height` - _optional_ - maximum height of the thumbnail to host
* `hosting_width` - _optional_ - maximum height of the thumbnail to host
* `hosting_scale` - _optional_ - scale of the thumbnail to host
* `hosting_bucket` - _optional_ - S3 bucket to upload the screenshot or thumbnail (required for S3)
* `hosting_file` - _optional_ - file name to use (for S3 only)
* `hosting_headers` - _optional_ - list of headers to add to the S3 object (for S3 only)

### Delete screenshot data

> You can delete details of your screenshots to remove any confidential information.

*Tags:* `Screenshot`

#### Input Parameters
* `id` - _required_ - screenshot ID
* `data` - _optional_ - data to remove. You can specify multiple of them (separated by a ,): *image* (image files), *url* (url requested), *metadata* (time added, time finished, post data, cookie and referer used for the screenshot), *all* (all data and files)


### Host thumbnails on your own S3 account or on Browshot.

> You can host screenshots and thumbnails on your own S3 account or on Browshot.

*Tags:* `Screenshot`

#### Input Parameters
* `id` - _required_ - screenshot ID
* `hosting` - _required_ - hosting option: s3 or browshot
    Possible values: s3, browshot.
* `width` - _optional_ - width of the thumbnail
* `height` - _optional_ - height of the thumbnail
* `scale` - _optional_ - scale of the thumbnail
* `bucket` - _optional_ - S3 bucket to upload the screenshot or thumbnail - required with hosting=s3
* `file` - _optional_ - file name to use - optional, used with hosting=s3
* `headers` - _optional_ - HTTP headers to add to your S3 object - optional, used with hosting=s3

### Get the HTML code

> Retrieve the HTML code of the rendered page. This API call should be used when html=1 was specified in the screenshot request.

*Tags:* `Screenshot`

#### Input Parameters
* `id` - _required_ - screenshot ID

### Query screenshot status

> Once a screenshot has been requested, its status must be checked until it is either "error" or "finished".

*Tags:* `Screenshot`

#### Input Parameters
* `id` - _required_ - screenshot ID received from /api/v1/screenshot/create
* `details` - _optional_ - level of details about the screenshot and the page

### Get information about screenshots

> Get information about the last 100 screenshots requested.

*Tags:* `Screenshot`

#### Input Parameters
* `limit` - _optional_ - maximum number of screenshots' information to return
* `status` - _optional_ - get list of screenshot in a given status (error, finished, in_process)
    Possible values: error, finished, in_process.

### Request multiple screenshots

> Request multiple screenshots in one API call. The API call accepts all the parameters supported by screenshot/create.<br/>
> You can specify up to 10 URLs and 10 instances for a total of 100 screenshots in one API call.

*Tags:* `Screenshot`

#### Input Parameters
* `url` - _required_ - URL of the page to get a screenshot for. You can specify multiple url parameters (up to 10).
* `instance_id` - _required_ - instance ID to use. You can specify multiple instance_id parameters (up to 10).
* `size` - _optional_ - screenshot size - "screen" (default) or "page"
    Possible values: screen, page.
* `cache` - _optional_ - use a previous screenshot (same URL, same instance) if it was done within <cache_value> seconds. The default value is 24hours. Specify cache=0 if you want a new screenshot.
* `delay` - _optional_ - number of seconds to wait after the page has loaded. This is used to let JavaScript run longer before taking the screenshot. Use delay=0 to take screenshots faster.
* `flash_delay` - _optional_ - number of seconds to wait after the page has loaded if Flash elements are present. Use flash_delay=0 to take screenshots faster.
* `screen_width` - _optional_ - width of the browser window. For desktop browsers only.
* `screen_height` - _optional_ - height of the browser window. For desktop browsers only. (Note: full-page screenshots can have a height of up to 15,000px)
* `priority` - _optional_ - assign priority to the screenshot (for private instances only)
* `referer` - _optional_ - use a custom referrer header - paid screenshots only
* `post_data` - _optional_ - send a POST requests with post_data, useful for filling out forms - paid screenshots only
* `cookie` - _optional_ - set a cookie for the URL requested (see Custom POST Data, Referer and Cookie) Cookies should be separated by a ; - paid screenshots only
* `script` - _optional_ - URL of javascript file to execute after the page load event
* `details` - _optional_ - level of information available with screenshot/info
* `html` - _optional_ - saves the HTML of the rendered page which can be retrieved by the API call screenshot/html. This feature costs *1 credit* per screenshot.
* `max_wait` - _optional_ - maximum number of seconds to wait before triggering the PageLoad event. Note that delay will still be used. (default: 0 = disabled)
* `headers` - _optional_ - any custom HTTP headers. (Not supported with Internet Explorer)
* `hosting` - _optional_ - hosting option - s3 or browshot
    Possible values: s3, browshot.
* `hosting_height` - _optional_ - maximum height of the thumbnail to host
* `hosting_width` - _optional_ - maximum height of the thumbnail to host
* `hosting_scale` - _optional_ - scale of the thumbnail to host
* `hosting_bucket` - _optional_ - S3 bucket to upload the screenshot or thumbnail (required for S3)
* `hosting_file` - _optional_ - file name to use (for S3 only)
* `hosting_headers` - _optional_ - list of headers to add to the S3 object (for S3 only)

### Search for screenshots

> Search for screenshots of a specific URL.

*Tags:* `Screenshot`

#### Input Parameters
* `url` - _required_ - look for a string matching the URL requested
* `limit` - _optional_ - maximum number of screenshots' information to return
* `status` - _optional_ - get list of screenshot in a given status (error, finished, in_process)
    Possible values: error, finished, in_process.

### Share a screenshot

> You can make your screenshots public, add notes, and share it with your friends and colleagues. Only screenshots which are successfully completed can be shared.n the thumbnail. You can take a 1024x768 screenshot, crop it to 768x768, and get it scaled down to 300x300.

*Tags:* `Screenshot`

#### Input Parameters
* `id` - _required_ - screenshot ID
* `note` - _optional_ - note to add on the sharing page

### Retrieve a thumbnail image

> Unlike the other API calls, this API sends back the thumbnail as a PNG file, not JSON. The HTTP response code indicates whether the screenshot was successful (200), or incomplete (404) or failed (404). If the screenshot failed or is not finished, a default image "Not found" is sent.<br/>
> <br/>
> You can crop your screenshots. The crop is done first, then the thumbnail. You can take a 1024x768 screenshot, crop it to 768x768, and get it scaled down to 300x300.

*Tags:* `Screenshot`

#### Input Parameters
* `id` - _required_ - screenshot ID
* `width` - _optional_ - width of the thumbnail
* `height` - _optional_ - height of the thumbnail
* `scale` - _optional_ - scale of the thumbnail
* `zoom` - _optional_ - zoom 1 to 100 percent
* `ratio` - _optional_ - Use fit to keep the original page ration, and fill to get a thumbnail for the exact width and height.  specified. If you provide both width and height, you need to specify the ratio: fit to keep the original width/height ratio (the thumbnail might be smaller than the specified width and height), or fill to crop the image if necessary.
    Possible values: fit, fill.
* `left` - _optional_ - left edge of the area to be cropped
* `right` - _optional_ - right edge of the area to be cropped
* `top` - _optional_ - top edge of the area to be cropped
* `bottom` - _optional_ - bottom edge of the area to be cropped
* `format` - _optional_ - image as PNG or JPEG
    Possible values: png, jpeg.
* `shot` - _optional_ - get the second or third screenshot if multiple screenshots were requested
* `quality` - _optional_ - JPEG quality factor (for JPEG thumbnails only)

## License

**flow**ground :- Telekom iPaaS / browshot-com-connector<br/>
Copyright © 2019, [Deutsche Telekom AG](https://www.telekom.de)<br/>
contact: flowground@telekom.de

All files of this connector are licensed under the Apache 2.0 License. For details
see the file LICENSE on the toplevel directory.
