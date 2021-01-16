import * as React from 'react'
const defaultState = {
    imageViewer: {
        imageUrls: [],
        index: 0,
        visible: false
    },//图片浏览器
    search: '',//inputText
    titleIndex: 0,//tabs index
    pageNo: 1,//分页
    loadingStatus: 0,//网络请求状态
    dataList: [],//list数据源
    dataListCache: [],//list数据源拷贝
    refreshState: 1,//刷新状态

}




/**
 * 增量状态
 * @param {} initState
 */
const ViewModel = (initState = {}) => {
    let viewModelTemp

    const [viewModel, setVm] = React.useState({
        ...defaultState,
        ...initState
    })

    /***
     * 只能更新目标状态
     */
    const setViewModel = (intent) => {
        if (intent == null) {
            throw new Error('[sg:setViewModel] intent is null')
        }

        if (viewModelTemp == null) {
            viewModelTemp = viewModel
        }

        viewModelTemp = {
            ...viewModelTemp,
            ...intent
        }
        // console.log('sg intent', intent)
        // console.log('sg viewModelTemp', viewModelTemp)

        setVm(viewModelTemp)
        return Promise.resolve(viewModelTemp)
    }
    return {
        viewModel,
        setViewModel,
    }
}


export default ViewModel;





/***
 * 给useState添加回调
 */
export const useCallbackState = (od) => {
    const cbRef = React.useRef();
    const [data, setData] = React.useState(od);

    React.useEffect(() => {
        cbRef.current && cbRef.current(data);
    }, [data]);

    return [data, function (d, callback) {
        cbRef.current = callback;
        setData(d);
    }];
}
