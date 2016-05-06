# List of Figures

{% for fig in book.figures %}
   * {{ fig.key }} [{{ fig.list_caption }}]({{ fig.backlink }})
{% endfor %}