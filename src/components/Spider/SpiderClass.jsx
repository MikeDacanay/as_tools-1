import React, { Component, createRef } from 'react'
import { connect } from 'react-redux';
import $ from 'jquery';

import * as d3 from 'd3';

import ResultSet from '../../libs/ResultSet';

import svgTexture from '../../assets/images/Results-Graph_TextureYellow-simple.svg'
import legendLine from '../../assets/images/line-20.svg'

import './Spider.scss';

export class SpiderClass extends Component {
  state = {}
  d3Ref = createRef()

  static defaultProps = {
    radius: 5,
    w: 310,
    h: 310,
    factor: 1,
    factorLegend: .85,
    levels: 5,
    maxValue: 125,
    radians: 2 * Math.PI,
    opacityArea: 0.5,
    ToRight: 5,
    TranslateX: 0,
    TranslateY: 0,
    ExtraWidthX: 0,
    ExtraWidthY: 0,
    color: d3.scaleOrdinal(d3.schemeCategory10)
  }
  rScale = d3.scaleLinear()
    .domain([0, this.state.factor * Math.min(this.state.w / 2, this.state.h / 2)])
    .range([0, this.state.maxValue])

  componentDidMount() {
    this.paintSvg();
    this.drawSvg();

    // const spiderHref1 = $(".Spider__texture--1").attr('href').substring(1);
    // const spiderLegHref1 = $(".Spider__legend-line").attr('src').substring(1);

    // const spiderHref2 = $(".Spider__texture--2").attr('href').substring(1);
    // const spiderLegHref2 = $(".Spider__legend-line--2").attr('src').substring(1);    

    // $(".Spider__texture--1").attr('href', spiderHref1);
    // $(".Spider__legend-line--1").attr('src', spiderLegHref1);
    // $(".Spider__texture--2").attr('href', spiderHref2);
    // $(".Spider__legend-line--2").attr('src', spiderLegHref2);


    if (this.props.isMob) {
      const spiderHref2 = $(".Spider__texture--2").attr('href').substring(1);
      // const spiderLegHref2 = $(".Spider__legend-line--2").attr('src').substring(1);    
      $(".Spider__texture--2").attr('href', spiderHref2);
      // $(".Spider__legend-line--2").attr('src', spiderLegHref2);      
    } else if (this.props.isMob === undefined) {
      const spiderHref1 = $(".Spider__texture--1").attr('href').substring(1);
      const spiderLegHref1 = $(".Spider__legend-line").attr('src').substring(1);
      $(".Spider__texture--1").attr('href', spiderHref1);
      $(".Spider__legend-line--1").attr('src', spiderLegHref1);
    }

  }

  componentDidUpdate(prevProps, prevState) {
    this.drawSvg()
  }

  paintSvg = () => {
    let svg = d3.select(this.d3Ref.current)

    const allLevels = svg
      .append('g').attr('class', 'all-levels')

    const allAxis = (this.props.data.map(el => el.label))
    const total = allAxis.length
    const radius = this.props.factor * Math.min(this.props.w / 2, this.props.h / 2)



    for (let i = 0; i < this.props.levels; i++) {
      let levelFactor = this.props.factor * radius * ((i + 1) / this.props.levels)
      allLevels
        .append('g')
        .attr('class', `level-${i}`)
        .selectAll('.levels')
        .data(allAxis)
        .enter()
        .append('svg:line')
        .attr('x1', (d, i) => levelFactor * (1 - this.props.factor * (-Math.sin(i * this.props.radians / total))))
        .attr('y1', (d, i) => levelFactor * (1 - this.props.factor * (-Math.cos(i * this.props.radians / total))))
        .attr('x2', (d, i) => levelFactor * (1 - this.props.factor * (-Math.sin((1 + i) * this.props.radians / total))))
        .attr('y2', (d, i) => levelFactor * (1 - this.props.factor * (-Math.cos((1 + i) * this.props.radians / total))))
        .attr('class', `Spider__line Spider__line--${i}`)
        .attr('transform', `translate(${this.props.w / 2 - levelFactor},${this.props.h / 2 - levelFactor})`)
    }
  }

  drawSvg = () => {

    // this.setState({ maxValue: Math.max(this.state.maxValue, d3.max(this.props.data, d => d.score)) })
    const allAxis = (this.props.data.map(el => el.label))
    const total = allAxis.length
    const radius = this.props.factor * Math.min(this.props.w / 2, this.props.h / 2)

    const svg = d3.select(this.d3Ref.current)


    let outer = this.props.factor * radius;
    const lastLevel = svg.selectAll('.last-line')
      .data(this.props.data)

    lastLevel
      .transition()
      .duration(1000)
      .attr('x2', (d, i) => {
        if (i < this.props.currentQuestion - 1) {
          return outer * (1 - this.props.factor * (-Math.sin((1 + (i)) * this.props.radians / total)))
        } else {
          return outer * (1 - this.props.factor * (-Math.sin(i * this.props.radians / total)))
        }
      })
      .attr('y2', (d, i) => {
        if (i < this.props.currentQuestion - 1) {
          return outer * (1 + this.props.factor * (-Math.cos((1 + (i)) * this.props.radians / total)))
        } else {
          return outer * (1 + this.props.factor * (-Math.cos(i * this.props.radians / total)))
        }
      })

    lastLevel
      .enter()
      .append('svg:line')
      .attr('class', 'last-line')
      .attr('transform', `translate(${this.props.w / 2 - outer},${this.props.h / 2 - outer})`)
      .attr('x1', (d, i) => outer * (1 - this.props.factor * (-Math.sin(i * this.props.radians / total))))
      .attr('y1', (d, i) => outer * (1 + this.props.factor * (-Math.cos(i * this.props.radians / total))))
      .attr('x2', (d, i) => outer * (1 - this.props.factor * (-Math.sin(i * this.props.radians / total))))
      .attr('y2', (d, i) => outer * (1 + this.props.factor * (-Math.cos(i * this.props.radians / total))))


    let axisLine = svg.selectAll('.Spider__Axis__Line').data(allAxis);

    axisLine
      .enter()
      .append('line')
      .merge(axisLine)
      .attr("x1", this.props.w / 2)
      .attr("y1", this.props.h / 2)
      .attr('x2', (d, i) => this.props.w / 2 * (1 - this.props.factor * Math.sin(-i * this.props.radians / total)))
      .attr('y2', (d, i) => this.props.h / 2 * (1 - this.props.factor * Math.cos(-i * this.props.radians / total)))
      .attr("class", "Spider__Axis__Line")


    let axisLabel = svg.selectAll('.Spider__Legend').data(this.props.data)

    axisLabel
      .transition()
      .duration(1000)
      .style('fill', (d, i) => {
        if (this.props.currentQuestion < 7 && i === this.props.currentQuestion - 1) {
          return '#f0cc71'
        }
        if (this.props.currentQuestion === 7 && d.score < 100) {
          return '#f0cc71'
        }
        return `#76a2a0`
      })




    axisLabel.enter()
      .append('text')
      .merge(axisLabel)
      .attr("class", "Spider__Legend")
      .attr("text-anchor", "middle")
      // .attr("dy", "-0em") // increase if you want to bring the text down horizontally
      .attr("dy", () => {
        if (window.innerWidth <= 600) {
          return '-1.25em'
        }
        return '-0em'
      })
      .attr("transform", function (d, i) { return "translate(0, 0)" })
      .attr('x', (d, i) => this.props.w / 2 * (1 - this.props.factorLegend * (-Math.sin(i * this.props.radians / total))) - 82 * (-Math.sin(i * this.props.radians / total)))
      .attr('y', (d, i) => {
        if (window.innerWidth <= 500) {
          return this.props.h / 2 * (1 - (Math.cos(i * this.props.radians / total))) - 50 * (Math.cos(i * this.props.radians / total))
        }
        return this.props.h / 2 * (1 - (Math.cos(i * this.props.radians / total))) - 35 * (Math.cos(i * this.props.radians / total))
      })
      .text(function (d) { return d.label.toUpperCase() })
      // .call(wrap, 100)
      .call((d) => {
        if (window.innerWidth <= 650) {
          if (this.props.currentLang === 'German') { return d.call(wrap, 80, 35) }
          return d.call(wrap, 80, 38)
        }
        if (this.props.currentLang === 'German') { return d.call(wrap, 100, 35) }
        return d.call(wrap, 100, 38)

      })
      .transition().duration(1000)
      .style('opacity', (d, i) => {
        if (this.props.currentQuestion === 7) { return 1 }
        if (this.props.currentQuestion - 1 === i) { return 1 }
        if (i < this.props.currentQuestion - 1 || d.score !== 0) { return 0.6 }
        // return 0.3
      })
      .style('fill', (d, i) => {
        if (this.props.currentQuestion < 7 && i === this.props.currentQuestion - 1) {
          return '#f0cc71'
        }
        if (this.props.currentQuestion === 7 && d.score < 100) {
          return '#f0cc71'
        }
        return `#fff`
      })
      .style('font-size', () => {
        if (this.props.currentLang === 'Russian' && window.innerWidth <= 400) { return '12px' }
        if (this.props.currentLang === 'Russian' && window.innerWidth <= 450) { return '10px' }
        if (this.props.currentLang === 'Russian') { return '8px' }
      })


    axisLabel.exit().remove()

    function wrap(text, width, maxTextLength = 50) {

      text.each(function (d) {

        let text = d3.select(this),
          words = text.text().length >= maxTextLength ? text.text().slice(0, maxTextLength).concat('...').split(/\s+/).reverse() : text.text().split(/\s+/).reverse(),
          // words = text.text().slice(0, 25).concat('...').split(/\s+/).reverse(),
          // words = text.text().split(/\s+/).reverse(),
          word,
          line = [],
          lineNumber = 0,
          lineHeight = 1.3,
          x = text.attr('x'),
          y = text.attr('y'),
          dy = parseFloat(text.attr('dy')),
          tspan = text.text(null).append('tspan').attr('x', x).attr('y', y).attr('dy', dy + 'em');

        // console.log(text.data()[0].label)
        // console.log(words)
        // console.log(words[0]) 
        if (words[0] === 'AUSGABENMANAGEMENT') { words = ['GEMENT', 'AUSGABENMANA-'] }
        if (words[0] === 'LIEFERANTENMANAGEMENT') { words = ['MANAGEMENT', 'LIEFERANTEN-'] }
        if (words[0] === 'BETRUGSÜBERWACHUNG') { words.shift().unshift('WACHUNG', 'BETRUGSÜBER-') }
        // if(words[0] === 'БИЗНЕС-ПЛАНИРОВАНИЕ') {words.shift().unshift('ПЛАНИРОВАНИЕ','БИЗНЕС-')}
        if (words[0] === 'БИЗНЕС-ПЛАНИРОВАНИЕ') { words.splice(0, 1, 'ПЛАНИРОВАНИЕ', 'БИЗНЕС-') }

        while (word = words.pop()) {
          // if(word === 'AUSGABENMANAGEMENT' || 'LIEFERANTENMANAGEMENT'){ console.log('Word matches')}
          line.push(word)
          tspan.text(line.join(' '))

          if (tspan.node().getComputedTextLength() > width) {
            line.pop()
            tspan.text(line.join(' '))
            line = [word]
            tspan = text.append('tspan').attr("x", x).attr("y", y).attr("dy", ++lineNumber * lineHeight + dy + "em").text(word);
          }
        }
      })
    }


    let dataValues = []
    svg.selectAll('.nodes')
      .data(this.props.data, (j, i) => {
        dataValues.push([
          this.props.w / 2 * (1 - (parseFloat(Math.max(j.score, 0)) / this.props.maxValue) * this.props.factor * (-Math.sin(i * this.props.radians / total))),
          this.props.h / 2 * (1 - (parseFloat(Math.max(j.score, 0)) / this.props.maxValue) * this.props.factor * (Math.cos(i * this.props.radians / total)))
        ])
      });
    dataValues.push(dataValues[0])

    let polygon = svg.selectAll('.area')
      // .data([dataValues])
      .data([dataValues])

    polygon
      .enter()
      .append('clipPath')
      .attr('id', `svgClip--${this.props.isMob ? '2' : '1'}`)
      .append('polygon')
      .attr('class', 'area')
      .merge(polygon)
      .transition()
      .duration(1000)
      .attr('points', d => {
        let str = '';
        for (let pti = 0; pti < d.length; pti++) {
          str = str + (d[pti][0]) + ',' + (d[pti][1]) + ' '
        }
        return str
      })

    const nodes = svg.selectAll('.Spider__node')
      .data(this.props.data);

    nodes
      .transition()
      .duration(1000)
      .attr('x', (d, i) => (this.props.w / 2 * (1 - (Math.max(d.score, 0) / this.props.maxValue) * this.props.factor * Math.sin(-i * this.props.radians / total))) - 9)
      .attr("y", (j, i) => (this.props.h / 2 * (1 - (Math.max(j.score, 0) / this.props.maxValue) * this.props.factor * Math.cos(i * this.props.radians / total))) - 8.5)
      .attr('opacity', (d, i) => {
        if (d.score === 0) {
          return 0
        }
        return 1
      })



    nodes.enter()
      .append('svg') // width="26" height="27" fill="none" viewBox="0 0 26 27"
      .attr('class', `Spider__node ${this.props.isMob ? 'Spider__node--2' : 'Spider__node--1'}`)
      .attr('width', 25)
      .attr('height', 25)
      .attr('display', 'block')
      .attr('viewBox', '0 0 35 35')
      // .attr('transform', `translate(-50,-50)`)
      .attr('opacity', d => d.score === 0 ? 0 : 1)
      .attr('x', (d, i) => (this.props.w / 2 * (1 - (Math.max(d.score, 0) / this.props.maxValue) * this.props.factor * Math.sin(-i * this.props.radians / total))) - 10)
      .attr("y", (j, i) => (this.props.h / 2 * (1 - (Math.max(j.score, 0) / this.props.maxValue) * this.props.factor * Math.cos(i * this.props.radians / total))))
      .attr('alt', (d, i) => d.score)
      .append('path')
      .attr('d', 'M3.23 13.298c0-5.396 4.374-9.77 9.77-9.77s9.77 4.374 9.77 9.77-4.374 9.77-9.77 9.77-9.77-4.375-9.77-9.77zM13 .528C5.947.528.23 6.245.23 13.298c0 7.052 5.717 12.77 12.77 12.77 7.052 0 12.77-5.718 12.77-12.77C25.77 6.245 20.052.528 13 .528zm0 18.917c3.395 0 6.147-2.752 6.147-6.147 0-3.395-2.752-6.148-6.147-6.148-3.395 0-6.147 2.753-6.147 6.148 0 3.395 2.752 6.147 6.147 6.147z')



  }
  render() {

    const spiderContainerClass = ['Spider__Container', `${this.props.isMob ? 'Spider__Container--2' : ''}`];
    const spiderNodeClass = ['Spider__Node', `${this.props.isMob ? 'Spider__Container--2' : 'Spider__Container--1'}`];


    return (
      <React.Fragment >

        <div className={spiderContainerClass.join(' ')}>
          <svg viewBox={window.innerWidth <= 600 ? '0 0 475 500' : '0 0 475 465'}
            preserveAspectRatio={'xMidYMid meet'}
            className='Spider__group'
          >
            <g transform={`translate(80, 80)`} ref={this.d3Ref}>
              <image href={svgTexture} alt="svgTexture" className={`Spider__texture ${this.props.isMob ? 'Spider__texture--2' : 'Spider__texture--1'}`} />
            </g>
          </svg>
          <div className="Spider__flex">
            <div className="Spider__desc Spider__desc--1">
              <div className="Spider__yellow"></div>
              <p className="Spider__text">{ResultSet.legend1[this.props.currentLang]}</p>
            </div>
            <div className="Spider__desc">
              {this.props.currentQuestion === 7
                ? <div className="Spider__finished-line"></div>
                : <img src={legendLine} alt='legendLine' className={`Spider__legend-line ${this.props.isMob ? 'Spider__legend-line--2' : 'Spider__legend-line--1'}`} />
              }
              <p className="Spider__text">{ResultSet.legend2[this.props.currentLang]}</p>
            </div>
          </div>
        </div>

      </React.Fragment >
    )
  }
}
const buildArr = (arr1, arr2) => {
  let finalArr = arr1.map((el, i) => {
    return {
      score: el,
      label: arr2[i],
    }
  })
  return finalArr
}

const mapStateToProps = (state) => ({
  currentQuestion: state.questionsReducer.currentQuestion,
  data: buildArr(state.scoreReducer.specificScore, state.questionsReducer.currentLabels),
  currentLang: state.langReducer.currentLang,
})


export default connect(mapStateToProps, null)(SpiderClass)
