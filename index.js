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

const timeStamp = new Date().getTime();

const readme = `\
### Hi there 👋

⏳ Year progress ${progressBarOfThisYear} ${(progressOfThisYear * 100).toFixed(2)} %

---

⏰ Updated on ${new Date(parseInt(timeStamp)).toLocaleString().replace(/年|月/g, "-").replace(/日/g, " ")}

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

// console.log(readme);
