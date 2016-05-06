# List of Figures

{% for fig in book.figures %}
   * [{{ fig.key }}]({{ fig.backlink }}) {{ fig.list_caption }}
{% endfor %}