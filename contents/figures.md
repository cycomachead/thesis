# List of Figures

<p class="big-reset">&nbsp;</p>

{% for fig in book.figures %}
   [Fig {{ fig.nro }}](./{{ fig.backlink | replace('md', 'html') | replace('contents', '')}}) {{ fig.list_caption }}
{% endfor %}