# Grafana percent+ stat panel

![Grafana percent plus logo](https://raw.githubusercontent.com/JeanBaptisteWATENBERG/grafana-percent-plus/master/src/img/logo.svg "Grafana percent plus logo")

Simply computes and display percent given two metric.

Design with heartbeat in minds, it aims to display an availability rate. 
But you can give it any metric in input to compute your own percent rate.

## Usage

 1. Query two metrics

![Configure grafana queries](https://raw.githubusercontent.com/JeanBaptisteWATENBERG/grafana-percent-plus/master/docs/query.png "Configure grafana queries")

 2. Use them to display your availability rate

![Configure metrics in plugin panel](https://raw.githubusercontent.com/JeanBaptisteWATENBERG/grafana-percent-plus/master/docs/configure.png "Choose metrics and configure threshold in plugin panel")

## Install

Download latest release https://github.com/JeanBaptisteWATENBERG/grafana-percent-plus/releases/download/v1.0.1/grafana-percent-stat.zip and unzip it in your grafana plugin folder.

## Contibute

To work with this plugin run:
```
yarn dev
```

or
```
yarn watch
```

This will run linting tools and apply prettier fix.


To build the plugin run:
```
yarn build
```
