## WIP rendering a component

The button component can be included within other components like this:

{% render '@buttons' %}

This template for this component looks like this:

```
{% view '@buttons' %}
```

and it therefore expects a set of data to render it that is in the following format:

```
{% context '@buttons' %}
```