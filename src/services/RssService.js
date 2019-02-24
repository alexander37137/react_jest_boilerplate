import Parser from 'rss-parser';

// eslint-disable-next-line import/prefer-default-export
export const RssService = {
  async titles(rss) {
    const parser = new Parser();
    const feed = await parser.parseString(rss);
    return feed.items.map(item => item.title);
  },
};
