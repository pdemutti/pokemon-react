import Adapter from 'enzyme-adapter-react-15';
import chai, { expect } from 'chai'
import chaiEnzyme from 'chai-enzyme'
import Enzyme from 'enzyme';
import If from './if'
import React from 'react'
import { shallow } from 'enzyme'

Enzyme.configure({ adapter: new Adapter() });
chai.use(chaiEnzyme())

const jExpect = global.expect

const ifComponent = (
  <If test={true}>Demutti</If>
)
const ifFalse = (
  <If test={false}>Demutti</If>
)
const wrapper = shallow(ifComponent)
const wrapperFalse = shallow(ifFalse)

describe('ifComponent should:', () => {
  it('If snapshot true', () => { jExpect(wrapper).toMatchSnapshot() })
  it('If snapshot false', () => { jExpect(wrapperFalse).toMatchSnapshot() })
})