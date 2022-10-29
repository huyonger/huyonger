const thisYear = new Date().getFullYear();
const startTimeOfThisYear = new Date(`${thisYear}-01-01T00:00:00+00:00`).getTime();
const endTimeOfThisYear = new Date(`${thisYear}-12-31T23:59:59+00:00`).getTime();
const progressOfThisYear = (Date.now() - startTimeOfThisYear) / (endTimeOfThisYear - startTimeOfThisYear);
const progressBarOfThisYear = generateProgressBar();

function generateProgressBar() {
	const progressBarCapacity = 30;
	const passedProgressBarIndex = parseInt(progressOfThisYear * progressBarCapacity);
	const progressBar = "█".repeat(passedProgressBarIndex) + "▁".repeat(progressBarCapacity - passedProgressBarIndex);
	return `{ ${progressBar} }`;
}

function getZoneTime(offset) {
	// 取本地时间
	var localtime = new Date();
	// 取本地毫秒数
	var localmesc = localtime.getTime();
	// 取本地时区与格林尼治所在时区的偏差毫秒数
	var localOffset = localtime.getTimezoneOffset() * 60000;
	// 反推得到格林尼治时间
	var utc = localOffset + localmesc;
	// 得到指定时区时间
	var calctime = utc + 3600000 * offset;
	var nd = new Date(calctime);
	return nd.toDateString() + " " + nd.getHours() + ":" + nd.getMinutes() + ":" + nd.getSeconds();
}

const readme = `\
### Hi there 👋

⏳ Year progress ${progressBarOfThisYear} ${(progressOfThisYear * 100).toFixed(2)} %

---

⏰ Updated on ${getZoneTime(8)}

---
### My GitHub Contributions    

![](https://raw.githubusercontent.com/huyonger/huyonger/main/assets/github-contribution-grid-snake.svg)          

### About me      

[![Yong Hu's GitHub stats](https://github-readme-stats.vercel.app/api?username=huyonger&show_icons=true&theme=radical)](https://github.com/anuraghazra/github-readme-stats)
![Yong Hu's Most used languages](https://github-readme-stats.vercel.app/api/top-langs/?username=huyonger&layout=compact&hide_border=true&langs_count=10)

I'm Yong Hu, a web3 lovers.    

- 🔭 I’m currently striving for a better life in beijing.     
- 🤔 My blog 👉 https://imyoyo.xyz/         
- 📃 My cv 👉 https://cv.imyoyo.xyz/         
- 📫 My E-mail: 2385410383@qq.com          
\
`;

console.log(readme);
