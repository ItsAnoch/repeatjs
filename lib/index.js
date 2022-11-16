/** 
* @param {cb_} e - Callback function   
* @param {t} t - iterations    
* @param {f} e - step
* @param {l} e - start

Date Created: November 9, 2022
Author: Anoch Jeyakanthan
*/

export default function repeat(e, t = 1, f = 1, l = 0) {
  let o = !1;
  for (let r = l; r < t && (e(r, () => (o = !0)), !o); r += f);
}
