# List of Figures

{% for fig in book.figures %}
   * [{{ fig.key }}](./{{ fig.backlink | replace('md', 'html') | replace('contents', '')}}) {{ fig.list_caption }}
{% endfor %}