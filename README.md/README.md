# Mentor Statistics OpenClassRooms

Mentor Statistics is an Chrome/Firefox extension that help you have more information on your incomes when you are an OpenClassRooms Mentor.
This extension is only working for French mentors at the moment.
With this extension you will have a new table on your mentorship sessions history with these values for the 2 last months:
- Total number of mentoring sessions
- Incomes by level
- Total incomes

## Important about [OpenClassRooms](https://openclassrooms.com)

This extension is non-official. 
After an exchange by email, the extension can be delivered publicly, but is in no way an official source to OpenClassRooms.
The information delivered by the extensions cannot be used as reference with the OpenClassRooms team.

Thanks to OpenClassRooms to accept the publication of this extension.

## How to get the extension ?

This extension is downloadable on the Firefox Add-ons Store and the Chrome Web Store.

- [Firefox Add-ons Store](http://www.dropwizard.io/1.0.2/docs/) - To download extension for Firefox.
- [Chrome Web Store](http://www.dropwizard.io/1.0.2/docs/) - To download extension for Chrome.

## How to run ?

Once you have downloaded the extension, when you go on [the mentorship sessions history]](https://openclassrooms.com/fr/mentorship/dashboard/mentorship-sessions-history), a new table appear and the information start to appear.
The extension is a parser, you need to wait a little bit before getting all your current incomes.

### Install locally

If you want to install locally the extension you need to clone it on your computer and follow these steps to run it.

### Firefox

In order to run the extension locally with firerox you need to open the following in the URL bar:

```
about:debugging
```

When the page is loaded, you need to click on "Enable add-on debugging" the center top.
Once you have activated this mode, you need to click on "load temporary add-on" to run the extension locally.
A pop-up will appear and ask you to find the **manifest.json** in extension folder.
You need to select the **manifest.json** in **Mentor-Statistics-OpenClassRooms** folder.

> Please note, if you change the source code of the extension, remember to reload or your changes are going to not be done.

### Chrome

In order to run the extension locally with chrome you need to open the following in the URL bar:

```
chrome://extensions/
```

When the page is loaded, you need to activate developer mode at the right top of the page.
Once you have activated this mode, a new menu bar appear.
You need to click on "load unpacked" to run the extension locally.
A pop-up will appear and ask you to find the extension folder.
You need to select the **Mentor-Statistics-OpenClassRooms** folder.

Now you have the extension locally on your chrome browser.

> Please note, if you change the source code of the extension, remember to reload or your changes are going to not be done.

## Documentation

All code is commented with JSDoc. In the root of the repository you can access to a documentation by typing the following command:

```
$ jsdoc -r src/
```

## Built with

* [JQuery 3.3.1](https://jquery.com/) - Fast, small, and feature-rich JavaScript library.
* [Table-to-JSON](https://www.github.developerdan.com/table-to-json/) - A jQuery plugin that converts an HTML Table into a javascript object.

## Contributing

Please read [CONTRIBUTING.md](https://gist.github.com/PurpleBooth/b24679402957c63ec426) for details on our code of conduct, and the process for submitting pull requests to us.

## Versioning

For the versions available, see the [tags on this repository](https://github.com/gael-thomas/Mentor-Statistics-OpenClassRooms/tags). 

## Authors

* **Gaël THOMAS** - *Initial work* - [gael-thomas](https://github.com/gael-thomas)

## License

This project is under license - see the [LICENSE.md](LICENSE.md) file for details.
