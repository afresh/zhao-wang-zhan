<template>
  <div class="home-page">
    <!-- 上层：三列均等 -->
    <section class="home-top">
      <div class="row gap-12">
        <div class="col col-12 col-sm-6 col-md-4">
          <div class="card panel">
            <div class="card-header panel-header">政府类网站</div>
            <ul class="link-list">
              <li v-for="(site, idx) in govSites" :key="`gov-${idx}`">
                <a class="link" :href="site.url" target="_blank">{{ site.name }}</a>
                <span class="desc">{{ site.desc }}</span>
              </li>
            </ul>
          </div>
        </div>
        <div class="col col-12 col-sm-6 col-md-4">
          <div class="card panel">
            <div class="card-header panel-header">大厂与热站</div>
            <ul class="link-list">
              <li v-for="(site, idx) in bigSites" :key="`big-${idx}`">
                <a class="link" :href="site.url" target="_blank">{{ site.name }}</a>
                <span class="desc">{{ site.desc }}</span>
              </li>
            </ul>
          </div>
        </div>
        <div class="col col-12 col-sm-12 col-md-4">
          <div class="card panel">
            <div class="card-header panel-header">新站推荐</div>
            <ul class="link-list">
              <li v-for="(site, idx) in newSites" :key="`new-${idx}`">
                <a class="link" :href="site.url" target="_blank">{{ site.name }}</a>
                <span class="desc">{{ site.desc }}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <hr class="hr" />

    <!-- 中层：左右两列 -->
    <section class="home-middle">
      <div class="row gap-12">
        <div class="col col-12 col-md-8">
          <div class="card panel">
            <div class="card-header panel-header">网站大类</div>
            <div class="row gap-12">
              <div
                v-for="(cat, idx) in categories"
                :key="`cat-${idx}`"
                class="col col-6 col-sm-4 col-lg-3"
              >
                <div class="card cat-card">
                  <div class="card-body cat-card-content">
                    <div class="cat-title">{{ cat.title }}</div>
                    <div class="cat-meta">{{ cat.count }} 个网站</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col col-12 col-md-4">
          <div class="card panel">
            <div class="card-header panel-header">广告推荐</div>
            <div class="ads-grid">
              <div v-for="n in 4" :key="`ad-${n}`" class="ad-cell">
                <div class="ad-box">广告位 {{ n }}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <hr class="hr" />

    <!-- 下层：瀑布流网站信息卡片 -->
    <section class="home-bottom">
      <div class="masonry">
        <div v-for="(card, idx) in recCards" :key="`rec-${idx}`" class="masonry-item">
          <div class="card rec-card">
            <div class="rec-cover">
              <img :src="card.img" alt="" loading="lazy" />
            </div>
            <div class="rec-info">
              <div class="rec-title">{{ card.title }}</div>
              <div class="rec-desc">{{ card.desc }}</div>
              <div class="rec-actions">
                <a class="link" :href="card.url" target="_blank">访问</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
  import { ref } from 'vue'

  type SimpleSite = { name: string; url: string; desc: string }
  const govSites = ref<SimpleSite[]>([
    { name: '中国政府网', url: 'https://www.gov.cn', desc: '国家政务信息门户' },
    { name: '国家税务总局', url: 'https://www.chinatax.gov.cn', desc: '税务服务' },
    { name: '国家市场监督管理总局', url: 'https://www.samr.gov.cn', desc: '市场监管' },
    { name: '教育部', url: 'http://www.moe.gov.cn', desc: '教育政务' },
    { name: '公安部', url: 'https://www.mps.gov.cn', desc: '公安政务' },
  ])

  const bigSites = ref<SimpleSite[]>([
    { name: '人民网', url: 'http://www.people.com.cn', desc: '权威新闻网站' },
    { name: '新华网', url: 'http://www.xinhuanet.com', desc: '国家通讯社门户' },
    { name: '腾讯', url: 'https://www.tencent.com', desc: '互联网综合服务' },
    { name: '阿里巴巴', url: 'https://www.alibaba.com', desc: '电商与云计算' },
    { name: '字节跳动', url: 'https://www.bytedance.com', desc: '内容与技术公司' },
  ])

  const newSites = ref<SimpleSite[]>([
    { name: '栖息新知', url: '#', desc: '新锐知识社区' },
    { name: '图灵工坊', url: '#', desc: '开发者工具集' },
    { name: '灵感驿站', url: '#', desc: '设计灵感集合' },
    { name: '数研空间', url: '#', desc: '数据与可视化' },
    { name: '微光文库', url: '#', desc: '精品文档库' },
  ])

  type Category = { title: string; count: number }
  const categories = ref<Category[]>([
    { title: '新闻媒体', count: 128 },
    { title: '政务服务', count: 64 },
    { title: '电商平台', count: 96 },
    { title: '开发者', count: 72 },
    { title: '设计创意', count: 54 },
    { title: '教育学习', count: 88 },
    { title: '视频音乐', count: 73 },
    { title: '生活服务', count: 91 },
  ])

  type RecCard = { title: string; desc: string; img: string; url: string; h: number }
  const recCards = ref<RecCard[]>([
    {
      title: '开眼影像',
      desc: '高品质短视频分享',
      img: 'https://picsum.photos/seed/1/600/360',
      url: '#',
      h: 220,
    },
    {
      title: '灵感胶囊',
      desc: '创意灵感每日推送',
      img: 'https://picsum.photos/seed/2/600/480',
      url: '#',
      h: 280,
    },
    {
      title: '知更书屋',
      desc: '优质电子书资源',
      img: 'https://picsum.photos/seed/3/600/300',
      url: '#',
      h: 200,
    },
    {
      title: '曙光云笔记',
      desc: '跨平台云端笔记',
      img: 'https://picsum.photos/seed/4/600/460',
      url: '#',
      h: 260,
    },
    {
      title: '数海问津',
      desc: '数据图表与可视化',
      img: 'https://picsum.photos/seed/5/600/420',
      url: '#',
      h: 240,
    },
    {
      title: '像素工坊',
      desc: '在线图片编辑工具',
      img: 'https://picsum.photos/seed/6/600/380',
      url: '#',
      h: 220,
    },
    {
      title: '风向标',
      desc: '热点趋势追踪',
      img: 'https://picsum.photos/seed/7/600/320',
      url: '#',
      h: 210,
    },
    {
      title: '译世界',
      desc: '多语种AI翻译',
      img: 'https://picsum.photos/seed/8/600/500',
      url: '#',
      h: 290,
    },
  ])
</script>

<style scoped>
  .home-page {
    padding: 12px 0 20px;
  }

  /* Simple grid system */
  .row {
    display: flex;
    flex-wrap: wrap;
  }
  .gap-12 {
    gap: 12px;
  }
  .col {
    box-sizing: border-box;
  }
  .col-12 {
    flex: 0 0 100%;
    max-width: 100%;
  }
  .col-6 {
    flex: 0 0 50%;
    max-width: 50%;
  }
  .col-sm-4 {
    flex: 0 0 33.3333%;
    max-width: 33.3333%;
  }
  .col-sm-6 {
    flex: 0 0 50%;
    max-width: 50%;
  }
  .col-md-4 {
    flex: 0 0 33.3333%;
    max-width: 33.3333%;
  }
  .col-md-8 {
    flex: 0 0 66.6667%;
    max-width: 66.6667%;
  }
  .col-lg-3 {
    flex: 0 0 25%;
    max-width: 25%;
  }
  @media (max-width: 992px) {
    .col-md-4,
    .col-md-8 {
      flex: 0 0 100%;
      max-width: 100%;
    }
  }
  @media (max-width: 768px) {
    .col-sm-4,
    .col-sm-6 {
      flex: 0 0 100%;
      max-width: 100%;
    }
  }

  /* Panel */
  .card {
    background: var(--el-fill-color-blank);
    border: 1px solid var(--el-border-color);
    border-radius: var(--el-border-radius-small);
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.03);
  }
  .card-header {
    padding: 10px 12px;
    border-bottom: 1px solid var(--el-border-color);
    font-weight: 600;
    color: var(--el-text-color-primary);
  }
  .card-body {
    padding: 12px;
  }
  .panel-header {
    font-weight: 600;
    color: var(--el-text-color-primary);
  }
  .link-list {
    list-style: none;
    padding: 8px 6px;
    margin: 0;
  }
  .link-list li {
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 6px 4px;
  }
  .link-list .desc {
    color: var(--el-text-color-secondary);
    font-size: 12px;
  }

  /* Categories */
  .cat-card {
    margin-bottom: 12px;
  }
  .cat-card .card-body {
    padding: 12px;
  }
  .cat-card-content {
    display: flex;
    flex-direction: column;
    gap: 4px;
  }
  .cat-title {
    font-weight: 600;
  }
  .cat-meta {
    color: var(--el-text-color-secondary);
    font-size: 12px;
  }

  /* Ads */
  .ads-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 10px;
  }
  .ad-cell {
    min-height: 80px;
  }
  .ad-box {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: var(--el-fill-color);
    border: 1px dashed var(--el-border-color);
    color: var(--el-text-color-secondary);
    border-radius: var(--el-border-radius-small);
  }

  /* Masonry */
  .masonry {
    column-count: 4;
    column-gap: 12px;
  }
  .masonry-item {
    break-inside: avoid;
    margin-bottom: 12px;
  }
  .rec-card .card-body {
    padding: 0;
  }
  .rec-cover {
    width: 100%;
    height: auto;
  }
  .rec-cover img {
    width: 100%;
    display: block;
  }
  .rec-info {
    padding: 10px 12px;
  }
  .rec-title {
    font-weight: 600;
    margin-bottom: 4px;
  }
  .rec-desc {
    color: var(--el-text-color-secondary);
    font-size: 13px;
    margin-bottom: 6px;
  }

  /* Responsive */
  @media (max-width: 1200px) {
    .masonry {
      column-count: 3;
    }
  }
  @media (max-width: 992px) {
    .masonry {
      column-count: 2;
    }
  }
  @media (max-width: 576px) {
    .masonry {
      column-count: 1;
    }
  }
</style>
