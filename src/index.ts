import data from "./data";

import type { Station } from "./@types";
export type * from "./@types";

export default class ChinaRailwayStation {
    readonly #list: Station[];

    constructor() {
        this.#list = data.split("@").map(str => {
            const [
                pinyinCode,
                name,
                telecode,
                pinyin,
                pinyinLetter,
                order,
                sameCityCode,
                city,
                countryEng,
                country,
                cityEng
            ] = str.split("|");
            const result: Station = {
                pinyinCode,
                name,
                telecode,
                pinyin,
                pinyinLetter,
                order: +order,
                sameCityCode,
                city
            }
            if(countryEng) {
                result.countryEng = countryEng;
            }
            if(country) {
                result.country = country;
            }
            if(cityEng) {
                result.cityEng = cityEng;
            }
            return result;
        });
    }

    /**
     * 获取车站全部列表
     */
    public get list() {
        return this.#list;
    }

    /**
     * 获取车站全部列表（城市分组格式）
     */
    public get group() {
        return Object.groupBy(this.#list, ({city}) => city);
    }

    /**
     * 模糊搜索车站
     * @param keyword 关键词
     */
    public find(keyword: string) {
        keyword = keyword.toLowerCase();
        return this.#list.filter(item => (
            item.pinyinCode.includes(keyword) ||
            item.name.includes(keyword) ||
            item.telecode.toLowerCase().includes(keyword) ||
            item.pinyin.includes(keyword) ||
            item.pinyinLetter.includes(keyword) ||
            item.sameCityCode.includes(keyword) ||
            item.city.includes(keyword)
        ));
    }

    /**
     * 通过车站名获取车站信息
     * @param name 车站名
     */
    public findByName(name: string) {
        return this.#list.find(item => item.name === name);
    }

    /**
     * 通过电报码获取车站信息
     * @param telecode 电报码
     */
    public findByTelecode(telecode: string) {
        telecode = telecode.toUpperCase();
        return this.#list.find(item => item.telecode === telecode);
    }

    /**
     * 通过拼音码获取车站信息
     * @param pinyinCode 拼音码
     */
    public findByPinyinCode(pinyinCode: string) {
        pinyinCode = pinyinCode.toLowerCase();
        return this.#list.filter(item => item.pinyinCode === pinyinCode);
    }

    /**
     * 通过城市名或城市编码获取车站信息
     * @param city 城市名/城市编码
     */
    public findByCity(city: string) {
        return this.#list.filter(item => item.city === city || item.sameCityCode === city);
    }
}
