/** 函数用于更新页面高度 */
export function updateHeight() {
    // console.log('updateHeight');
    // 更新登录按钮那块的高度
    (document.getElementById('divLoginButton') as HTMLElement).style.height =
        (document.getElementsByClassName('loginStatus')[0] as HTMLElement).offsetHeight + 'px';
    // 隐藏菜单
    const langsContentStyle = (document.getElementById('div_change_lang_content') as HTMLElement).style;
    langsContentStyle.display = 'none';
    // 更新主体框高度
    let divmain = (document.getElementById('divmain') as HTMLElement); // 取元素的，可能非必要，但能让ts看懂
    divmain.style.bottom = ''; // 取消上下居中
    divmain.style.height = ''; // 取消高度设定
    divmain.style.height = divmain.offsetHeight + 'px'; // 设定高度
    if (window.innerHeight > divmain.offsetHeight){
        divmain.style.bottom = '0'; // 上下居中
    }
    //@ts-ignore
    document.body.style['min-height'] = divmain.offsetHeight + 'px';
    // 显示菜单
    langsContentStyle.display = '';
}
