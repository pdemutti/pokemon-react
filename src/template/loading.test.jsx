import Loading from './loading'

import Adapter from 'enzyme-adapter-react-15';
import chai, { expect } from 'chai'
import chaiEnzyme from 'chai-enzyme'
import Enzyme from 'enzyme';

import React from 'react'
import { shallow } from 'enzyme'

Enzyme.configure({ adapter: new Adapter() });
chai.use(chaiEnzyme())

const jExpect = global.expect

const LoadingComponent = (
    <Loading test={true}></Loading>
)

const wrapper = shallow(LoadingComponent)

describe('LoadingComponent should:', () => {
    it('If snapshot true', () => { jExpect(wrapper).toMatchSnapshot() })
  })
