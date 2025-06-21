<template>
  <div class="page-content">
    <h3 class="table-title">
      <i class="iconfont-sys">&#xe74d;</i>关于 Art-Design 和 Art-Design-Pro
    </h3>

    <el-descriptions
      class="margin-top"
      title="Art-Design 开箱即用的精简版后台管理系统模板"
      :column="3"
      border
      style="margin: 20px 0"
    >
      <el-descriptions-item>
        <template #label>
          <div class="cell-item" style="text-wrap: nowrap">
            <el-icon style="margin-right: 6px">
              <House />
            </el-icon>
            Repository
          </div>
        </template>
        <el-link type="primary" href="https://github.com/Barry-Flynn/art-design" target="_blank">
          <el-tag size="small">Art-Design</el-tag>
          <el-icon class="el-icon--right"><Promotion /></el-icon>
        </el-link>
      </el-descriptions-item>
      <el-descriptions-item>
        <template #label>
          <div class="cell-item" style="text-wrap: nowrap">
            <el-icon style="margin-right: 6px">
              <user />
            </el-icon>
            Author
          </div>
        </template>
        <el-link type="primary" href="https://github.com/Barry-Flynn" target="_blank">
          百里飞洋（Barry-Flynn）
          <el-icon class="el-icon--right"><Promotion /></el-icon>
        </el-link>
      </el-descriptions-item>
      <el-descriptions-item>
        <template #label>
          <div class="cell-item" style="text-wrap: nowrap">
            <el-icon style="margin-right: 6px">
              <DataLine />
            </el-icon>
            ChangeLog
          </div>
        </template>
        <el-link
          type="primary"
          href="https://github.com/Barry-Flynn/art-design/blob/main/CHANGELOG.md"
          target="_blank"
        >
          更新日志
          <el-icon class="el-icon--right"><Promotion /></el-icon>
        </el-link>
      </el-descriptions-item>
      <el-descriptions-item>
        <template #label>
          <div class="cell-item" style="text-wrap: nowrap">
            <el-icon style="margin-right: 6px">
              <Document />
            </el-icon>
            Description
          </div>
        </template>
        一款出色的专注于用户体验和视觉设计的使用 Vite + TypeScript + Element Plus 的 Vue3
        后台管理解决方案，是 Art Design Pro 的精简版（即轻量版、简化版）。 Art Design 的使命是跟随
        Art Design Pro 的更新，去除复杂的示例页面和非必要的功能和组件，
        以最精简的代码迎接前端新手或者想要从初始状态搭建后台管理项目的开发者。
      </el-descriptions-item>
    </el-descriptions>

    <el-descriptions
      class="margin-top"
      title="Art-Design-Pro 示例页面丰富的后台管理系统模板"
      :column="3"
      border
      style="margin: 20px 0"
    >
      <el-descriptions-item>
        <template #label>
          <div class="cell-item" style="text-wrap: nowrap">
            <el-icon style="margin-right: 6px">
              <House />
            </el-icon>
            Repository
          </div>
        </template>
        <el-link type="primary" href="https://github.com/Daymychen/art-design-pro" target="_blank">
          <el-tag size="small">Art-Design-Pro</el-tag>
          <el-icon class="el-icon--right"><Promotion /></el-icon>
        </el-link>
      </el-descriptions-item>
      <el-descriptions-item>
        <template #label>
          <div class="cell-item" style="text-wrap: nowrap">
            <el-icon style="margin-right: 6px">
              <user />
            </el-icon>
            Author
          </div>
        </template>
        <el-link type="primary" href="https://github.com/Daymychen" target="_blank">
          SuperManTT（Daymychen）
          <el-icon class="el-icon--right"><Promotion /></el-icon>
        </el-link>
      </el-descriptions-item>
      <el-descriptions-item>
        <template #label>
          <div class="cell-item" style="text-wrap: nowrap">
            <el-icon style="margin-right: 6px">
              <DataLine />
            </el-icon>
            ChangeLog
          </div>
        </template>
        <el-link
          type="primary"
          href="https://github.com/Daymychen/art-design-pro/blob/main/src/mock/upgrade/changeLog.ts"
          target="_blank"
        >
          更新日志
          <el-icon class="el-icon--right"><Promotion /></el-icon>
        </el-link>
      </el-descriptions-item>
      <el-descriptions-item>
        <template #label>
          <div class="cell-item" style="text-wrap: nowrap">
            <el-icon style="margin-right: 6px">
              <Document />
            </el-icon>
            Description
          </div>
        </template>
        一款专注于用户体验和快速开发的开源后台管理解决方案。基于 ElementPlus
        设计规范，进行了视觉上的精心优化，提供更美观、更实用的前端界面，帮助你轻松构建高质量的后台系统。
        使用最新技术栈，内置常用业务组件模版，全面支持自定义设置，满足您的个性化需求。
      </el-descriptions-item>
    </el-descriptions>

    <h3 class="table-title" style="margin-top: 30px">
      <i class="iconfont-sys">&#xe74d;</i>Art Design Pro 更新日志
    </h3>

    <ArtTable :data="upgradeLogList" :pagination="false">
      <ElTableColumn label="版本号" prop="version" width="200" />
      <ElTableColumn label="内容">
        <template #default="scope">
          <div class="title">{{ scope.row.title }}</div>
          <div v-if="scope.row.detail" style="margin-top: 10px">
            <div class="detail-item" v-for="(item, index) in scope.row.detail" :key="index">
              {{ index + 1 }}. {{ item }}
            </div>
          </div>
        </template>
      </ElTableColumn>
      <ElTableColumn label="时间" prop="date" />
    </ArtTable>
  </div>
</template>

<script setup lang="ts">
  import ArtTable from '@/components/core/tables/ArtTable.vue'
  import { upgradeLogList } from '@/mock/upgrade/changeLog'

  defineOptions({ name: 'ChangeLog' })
</script>

<style lang="scss" scoped>
  .page-content {
    .table-title {
      display: flex;
      align-items: center;
      padding: 10px 0 20px;
      font-size: 18px;
      font-weight: 500;

      i {
        margin-right: 10px;
        font-size: 24px;
      }
    }

    .title {
      color: var(--art-gray-800);
    }

    .detail-item {
      color: var(--art-gray-600);
    }
  }
</style>
