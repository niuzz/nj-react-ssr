/******************************************
 *  Author : niuzz niuzz@hotmail.com   
 *  Created On : Fri Mar 23 2018
 *  File : TrendBlock.js
 *******************************************/
import React from 'react';
import styles from './index.less';

export default class TrendBlock extends React.Component {

	constructor(props) {
		super(props)
		this.state = {
			isShow: false,
			rect: {},
			rectStyle: {
				top: 0,
				left:0,
			}
		}
	}
	
	componentDidMount() {
		// do somthing
	}

	componentWillReceiveProps(nextProps) {

		const lastLeft = nextProps.rect.lastLeft

		// 闪烁问题
		if (this.state.rectStyle.left === nextProps.rect.left) return;
		if (this.state.rectStyle.left === (nextProps.rect.left - 200)) return;
		
		if (nextProps.rect.left === lastLeft) {
			this.setState({
				isShow: nextProps.isShow,
				rectStyle: {
					top: nextProps.rect.top,
					left: nextProps.rect.left - 200
				}
			})
			return
		} else {
			this.setState({
				isShow: nextProps.isShow,
				rectStyle: {
					top: nextProps.rect.top,
					left: nextProps.rect.left
				}
			})
		}
	}

	render() {
		const top = this.state.rectStyle.top;
		const left = this.state.rectStyle.left;
		const style = { top: top, left:left }
		return(
			<div className={`${styles['trend-block']} ${this.state.isShow ? 'show' : 'hidden'}`} style={style}>
				TrendBlock {this.props.index}
			</div>
		)
	}
}