// 获取页面元素
const timer = document.getElementById("timer"); // 倒计时显示的元素
const message = document.getElementById("message"); // 倒计时结束后显示的元素

// 设置目标时间
const targetDate = new Date("2024/01/01 00:00:00"); // 北京时间2024年元旦

// 定义一个函数，用来更新倒计时
function updateCountdown() {
  // 获取当前时间
  const currentDate = new Date();
  // 计算时间差，单位为毫秒
  const diff = targetDate.getTime() - currentDate.getTime();
  // 如果时间差小于等于0，说明倒计时结束
  if (diff <= 0) {
    // 清除定时器
    clearInterval(interval);
    // 隐藏倒计时元素
    timer.style.display = "none";
    // 显示结束信息
    reslotine.innerHTML = `<h4><font color=#E80017>新</font><font color=#BA0045>年</font><font
    color=#8C0073>快</font><font color=#5E00A1>乐</font><font color=#3000CF>！</font></h4>`;
    // 结束函数
    return;
  }
  // 计算剩余的天数、小时数、分钟数和秒数
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((diff % (1000 * 60)) / 1000);
  // 格式化时间，如果小于10，补0
  const format = (num) => (num < 10 ? "0" + num : num);
  // 更新倒计时元素的内容
  timer.innerHTML = `
  <p><font color=#E80017>距</font><font color=#D1002E>离</font><font color=#BA0045>2</font><font color=#A3005C>0</font><font
            color=#8C0073>2</font><font color=#75008A></font><font color=#5E00A1>4</font><font
            color=#4700B8></font><font color=#3000CF>年</font><font color=#1900E6>还</font><font color=#0200FD>有</font> <br>
    ${format(days)}天
    ${format(hours)}时
    ${format(minutes)}分
    ${format(seconds)}秒
    </p>
    `;
}

// 调用一次函数，初始化倒计时
updateCountdown();

// 设置一个定时器，每隔1秒调用一次函数，更新倒计时
const interval = setInterval(updateCountdown, 1000);