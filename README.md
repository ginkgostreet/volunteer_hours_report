# Volunteer Hours Report

Provides a drupal block that lists logged volunteer hours for the current user.

To QA, be sure you are logged in as a user with Volunteer hours logged. Use the Volunteer Logged Hours report to find a volunteer that has logged time and `drush uli` or use the masquerade module.


## Depends

Depends on the modules:

* insert_block
* date_popup



## Embed in Node

The module, `insert_block` is included as a dependency of the module, so it will be installed automatically.

It is not required to use and requires additional configuration



#### Configure Content Filters

Admin > Configuration > Content Authoring > Text Formats

Recommended to configure for Full HTML and Filtered HTML text formats.

Enable the "Insert blocks" filter.



#### Create a Node

Create your Node and set the title, url, what have you.

Add the following to the node body:
`[block:volunteer_hours_report=loghours_block]`