<script>
export default {
  onLaunch: function() {
    console.log('App Launch')
  },
  onShow: function() {
    console.log('App Show')
  },
  onHide: function() {
    console.log('App Hide')
  }
}
</script>

<style>
/* 全局基础样式 */
page {
  --bg-main: #fdfbf7;
  --bg-card: rgba(255, 255, 255, 0.7);
  --text-main: #1e293b;
  --text-sub: #64748b;
  --accent: #10b981;
  --border-color: rgba(226, 232, 240, 0.5);
  --shadow: 0 10rpx 30rpx rgba(0, 0, 0, 0.05);
  
  background-color: var(--bg-main);
  color: var(--text-main);
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
  transition: background-color 0.5s, color 0.5s;
}

page.dark {
  --bg-main: #0f172a;
  --bg-card: rgba(30, 41, 59, 0.7);
  --text-main: #f8fafc;
  --text-sub: #94a3b8;
  --accent: #34d399;
  --border-color: rgba(51, 65, 85, 0.5);
  --shadow: 0 10rpx 30rpx rgba(0, 0, 0, 0.2);
}

.min-h-screen { min-height: 100vh; }
.flex { display: flex; }
.flex-col { flex-direction: column; }
.items-center { align-items: center; }
.justify-between { justify-content: space-between; }
.justify-center { justify-content: center; }
.flex-1 { flex: 1; }

/* 消除小程序按钮默认边框 */
button::after { border: none; }
</style>
