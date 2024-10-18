import React, { Component } from 'react';

import Row from '../components/RowPageComponents';
import TitleSkill from '../components/TitleSkillComponents';
import SkillItem from '../components/SkillItemComponents';

import data from '../data.json';

class SkillsSection extends Component {

  render() {

    return (
      <Row>

        <TitleSkill 
          title={data.sections["1"].title}
          content={data.sections["1"].content}
        />

        {
          data.sections["1"].items.map(item=>{
            return (
              <SkillItem 
                icon={item.icon}
                title={item.title}
                content={item.content}
                progress={item.progress}
              />
            );
          })
        }

        

      </Row>
    );
  }

}

export default SkillsSection;
