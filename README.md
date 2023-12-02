# SAP Spartacus Measmerize Demo

A simple Angular application, demonstrating how to integrate the Measmerize widget, into an SAP Spartacus application.

## Pre-requisites

- [Prerequisites documented by SAP](https://help.sap.com/docs/SAP_COMMERCE_COMPOSABLE_STOREFRONT/cfcf687ce2544bba9799aa6c8314ecd0/e38d45609de04412920a7fc9c13d41e3.html#prerequisites)
- [Docker v24.0+](https://docs.docker.com/engine/release-notes/24.0/)

## Spartacus

The demo application depends on a set of spartacus libraries. Those libraries are either accessible from a local, or private npm repository. In order to simplify accessibility, this project opted to compile the libraries from source, and publish them to a local npm repository.

To build and serve the local repository, run the following command:

```bash
docker compose up
```

| Please use `docker compose`(you should have it by default) instead of `docker-compose`.

The process will take a few minutes to complete. Once completed, the local npm repository is available at http://localhost:4873.

## Build the Demo

The demo application is an angular application, that can be built using the following command:

```bash
npm install
```

This will download and install all required dependencies. The process will authenticate to the [Verdaccio](https://verdaccio.org/) repository, using the static, local credentials provided in the *.npmrc* file of the project.

## Configure the Demo

In the file [index.html](./src/index.html), configure the Measmerize widget script. Put your `data-brand-code`. And you can also change `data-product-code` in product component.

```html
<script id="measmerize-script" src="https://client.measmerize.com/script.js"
    data-brand-code="54cb5b86-f793-4f94-90a4-57279814f330" data-product-code="164759728417453"></script>
```

## Run the Demo

The demo can be started using the following command:

```bash
npm start
```

The process will take a few minutes to complete. Once completed, the demo application is available at http://localhost:4200.
