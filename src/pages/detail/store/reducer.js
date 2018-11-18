import { fromJS } from 'immutable' 
import * as constants from './constants'

const defaultState = fromJS({
	title: '梨花落',
	content: '<img src="https://upload-images.jianshu.io/upload_images/2542851-104f5b94a53ed707.jpeg?imageMogr2/auto-orient/strip%7CimageView2/2/w/1000/format/webp"/><p>冰箱里有羊肉、小炒肉、杂面、鸡蛋、蜂蜜、茶叶……第一天晚上，我们吃了羊肉杂面，味道稍微淡了些，但就那样对付吃了。家里没网，我稍微思考后便写完了第二天公号的推文，晚上她复习中学教案，我看了会《天龙八部》。岳老三每次出场，我都在一边笑出了猪叫声，然后很快就收到了她的白眼：“你看了这么多遍了还在看，我真不知道到底有什么乐趣。”“如果有一天你也能沉下心来看看，相信你也会无法自拔。”虽然我并不能确定她到底会不会看，但我当时确实有那样的信心。她没理我，只告诉我：“滚一边看吧！”我滚到了沙发上，把衣服披在身上，继续一边看，一边拍沙发轻轻叫绝。晚上吃了感冒药和消炎药，半杯热水下肚，我们早早休息了。作者：怀左同链接：https://www.jianshu.com/p/6ed8d4985f2a來源：简书简书著作权归作者所有，任何形式的转载都请联系作者获得授权并注明出处。</p>'
});

export default (state = defaultState, action ) => {
	switch(action.type){
		default:
			return state;
	}
}
