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

    <!-- 桌面端表格显示 -->
    <div class="desktop-view">
      <ArtTable :data="upgradeLogList">
        <ElTableColumn label="版本号" prop="version" width="100" />
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
        <ElTableColumn label="时间" prop="date" width="150" />
        <ElTableColumn label="备注" prop="remark" width="260" />
      </ArtTable>
    </div>

    <!-- 移动端卡片显示 -->
    <div class="mobile-view">
      <div class="changelog-cards">
        <div v-for="item in upgradeLogList" :key="item.version" class="changelog-card">
          <div class="card-header">
            <div class="version-tag">{{ item.version }}</div>
            <div class="date">{{ item.date }}</div>
          </div>

          <div class="card-content">
            <h4 class="title">{{ item.title }}</h4>

            <div v-if="item.detail && item.detail.length > 0" class="details">
              <div class="detail-list">
                <div v-for="(detail, index) in item.detail" :key="index" class="detail-item">
                  <span class="detail-number">{{ index + 1 }}.</span>
                  <span class="detail-text">{{ detail }}</span>
                </div>
              </div>
            </div>

            <div v-if="item.remark" class="remark">
              {{ item.remark }}
            </div>

            <div v-if="item.requireReLogin" class="require-relogin">
              <ElTag type="warning" size="small"> 需要重新登录 </ElTag>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
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

    // 桌面端显示
    .desktop-view {
      display: block;
    }

    // 移动端样式
    .mobile-view {
      display: none;

      .changelog-cards {
        display: flex;
        flex-direction: column;
        gap: 16px;
        margin-top: 20px;
      }

      .changelog-card {
        padding: 16px;
        background: var(--el-bg-color);
        border: 1px solid var(--el-border-color-light);
        border-radius: 8px;
        transition: all 0.3s ease;
      }

      .card-header {
        display: flex;
        flex-wrap: wrap;
        gap: 8px;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 12px;

        .version-tag {
          min-width: fit-content;
          padding: 4px 12px;
          font-size: 12px;
          font-weight: 600;
          color: white;
          background: linear-gradient(
            135deg,
            var(--el-color-primary),
            var(--el-color-primary-light-3)
          );
          border-radius: 20px;
        }

        .date {
          min-width: fit-content;
          font-size: 13px;
          color: var(--art-gray-600);
        }
      }

      .card-content {
        .title {
          margin-bottom: 12px;
          font-size: 15px;
          font-weight: 500;
          line-height: 1.4;
          color: var(--art-gray-800);
        }

        .details {
          margin-bottom: 12px;

          .detail-list {
            padding: 12px;
            background: rgba(var(--art-gray-200-rgb), 0.6);
            border-radius: 6px;
          }

          .detail-item {
            display: flex;
            margin-bottom: 8px;
            font-size: 13px;
            line-height: 1.6;
            color: var(--art-gray-600);

            &:last-child {
              margin-bottom: 0;
            }

            .detail-number {
              min-width: 20px;
            }

            .detail-text {
              flex: 1;
              word-break: break-word;
            }
          }
        }

        .remark {
          padding: 8px;
          margin-bottom: 12px;
          font-size: 12px;
          color: var(--art-gray-600);
          background: rgba(var(--art-gray-200-rgb), 0.6);
          border-radius: 4px;
        }

        .remark,
        .require-relogin {
          margin-top: 12px;

          :deep(.el-tag) {
            font-size: 12px;
            border-radius: 6px;

            i {
              margin-right: 4px;
            }
          }
        }
      }
    }

    // 移动端媒体查询
    @media (width <= 768px) {
      .desktop-view {
        display: none;
      }

      .mobile-view {
        display: block;
      }

      .table-title {
        padding: 8px 0 0;
        font-size: 16px;

        i {
          font-size: 20px;
        }
      }
    }

    // 平板端优化
    @media (width <= 1024px) and (width >= 769px) {
      .changelog-card {
        .card-header {
          .version-tag {
            padding: 6px 14px;
            font-size: 13px;
          }

          .date {
            font-size: 14px;
          }
        }

        .card-content .title {
          font-size: 16px;
        }
      }
    }
  }
</style>
