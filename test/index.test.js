const assert = require("assert");
const { fetchDictionary } = require("../index");
(async function () {
    const dict = await fetchDictionary();
    assert.ok(Array.isArray(dict), "dict should be array");
    const [item] = dict;
    assert.deepStrictEqual(item, {
            id: '000001',
            items: [
                {
                    taigenYogen: '体言',
                    expandControl: 0,
                    vocabularyNumber: 1,
                    gokeiSyubetsu: '代表語',
                    ryakusyou: '代表語形',
                    hyoukiYure: '代表表記',
                    bunya: [],
                    midashi: '曖昧'
                },
                {
                    taigenYogen: '体言',
                    expandControl: 0,
                    vocabularyNumber: 1,
                    gokeiSyubetsu: '代表語',
                    ryakusyou: '代表語形',
                    hyoukiYure: '異表記・表記ゆれ',
                    bunya: [],
                    midashi: 'あいまい'
                },
                {
                    taigenYogen: '体言',
                    expandControl: 0,
                    vocabularyNumber: 2,
                    gokeiSyubetsu: '代表語',
                    ryakusyou: '代表語形',
                    hyoukiYure: '代表表記',
                    bunya: [],
                    midashi: '不明確'
                },
                {
                    taigenYogen: '体言',
                    expandControl: 0,
                    vocabularyNumber: 3,
                    gokeiSyubetsu: '代表語',
                    ryakusyou: '代表語形',
                    hyoukiYure: '代表表記',
                    bunya: [],
                    midashi: 'あやふや'
                },
                {
                    taigenYogen: '体言',
                    expandControl: 0,
                    vocabularyNumber: 4,
                    gokeiSyubetsu: '代表語',
                    ryakusyou: '代表語形',
                    hyoukiYure: '代表表記',
                    bunya: [],
                    midashi: '不明瞭'
                },
                {
                    taigenYogen: '体言',
                    expandControl: 0,
                    vocabularyNumber: 5,
                    gokeiSyubetsu: '代表語',
                    ryakusyou: '代表語形',
                    hyoukiYure: '代表表記',
                    bunya: [],
                    midashi: '不確か'
                }
            ]
        }
    );
})().catch(error => {
    throw error;
});
