var bibtexParse = require('bibtex-parser-js');
var _ = require('lodash');
var fs = require('fs');

module.exports = {
    book: {
        assets: './assets',
        css: [
            "style.css"
        ]
    },

    filters: {
        cite: function(key) {
            var citation = _.find(this.book.bib, {'citationKey': key.toUpperCase()});

            if (citation != undefined) {
                if (!citation.used) {
                    citation.used = true;
                    this.book.bibCount++;
                    citation.number = this.book.bibCount;
                }
                // TODO: Add a link to the table.
                return '[' + citation.number + ']';
            } else {
                return "[Citation not found]";
            }
        }
    },

    hooks: {
        init: function() {
            var bibTexPath = this.config.get('pluginsConfig.bibtex.bibtex-path', 'literature.bib');
            var bib = fs.readFileSync(this.root + '/' + bibTexPath, 'utf8');
            this.bib = bibtexParse.toJSON(bib);
            this.bibCount = 0;
        }
    },

    blocks: {
        references: {
            process: function(blk) {
                var usedBib, sortedBib, result, formatStyle, msg, formatFunc;
                usedBib = _.filter(this.book.bib, 'used');
                sortedBib = _.sortBy(usedBib, 'number');

                result = '<table class="references">';
                formatStyle = this.config.get(
                    'pluginsConfig.bibtex.format',
                    'ieee'
                );
                formatFunc = FORMAT_FUNCTION_MAP[formatStyle];
                
                if (!formatFunc) {
                    msg = 'The format ' + formatStyle + ' is not supported.';
                    msg += 'Please choose one of:\n * ';
                    msg += Object.keys(FORMAT_FUNCTION_MAP).join('\n * ');
                    throw new Error(msg);
                }
                // TODO: Extract into a 'formatting' function.
                result += sortedBib.map(formatFunc).join('\n');
                result += '</table>';

                return result;
            }
        }
    }
};


var FORMAT_FUNCTION_MAP = {
    'acm': formatACM,
    'ieee' formatIEEE
};

function formatACM(item) {
    var result, formatters;
    formatters = {
        AUTHOR: (s) => formatAuthors(item.entryTags.AUTHOR) + ', ',
        TITLE: (s) => s + ',',
        BOOKTITLE: (s) => `<i>${s}</i>, `,
        PUBLISHER: (s) => `<i>${s}</i>, `,
        YEAR: (s) => `${s}.`,
        URL: (s) => `<a href="${s}" target="_blank">${s}</a>`
    }
    
    result = '<tr><td>[' + item.number + ']</td><td>';

    for (key in formatters) {
        var data = item.entryTags[key],
            func = formatters[key];
        if (data) {
            result += func(data);
        }
    }

    return result + '</td></tr>';
}

function formatIEEE(item) {
    var result = '<tr><td>[' + item.number + ']</td><td>';

    if (item.entryTags.AUTHOR) {
        result += formatAuthors(item.entryTags.AUTHOR) + ', ';
    }
    if (item.entryTags.TITLE) {
        result += item.entryTags.TITLE + ', ';
    }
    if (item.entryTags.BOOKTITLE) {
        result += '<i>' + item.entryTags.BOOKTITLE + '</i>, '
    }
    if (item.entryTags.PUBLISHER) {
        result += '<i>' + item.entryTags.PUBLISHER + '</i>, '
    }
    if (item.entryTags.YEAR) {
        result += item.entryTags.YEAR + '.';
    }

    return result + '</td></tr>';
}


function formatAuthors (authorsString) {
    var authors = authorsString.split('and');

    if (authors.length > 3) {
        return authors[0] + ' <i>et al.</i>';
    } else {
        return authorsString;
    }
}


