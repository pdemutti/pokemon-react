import Alert from './alert'

import Adapter from 'enzyme-adapter-react-15';
import chai, { expect } from 'chai'
import chaiEnzyme from 'chai-enzyme'
import Enzyme from 'enzyme';

import React from 'react'
import { shallow } from 'enzyme'

Enzyme.configure({ adapter: new Adapter() });
chai.use(chaiEnzyme())


const jExpect = global.expect
const type = "success"
const AlertComponent = (
    <Alert test={true} type={type} showAlert={true} text="Alert!"></Alert>
)

const alertWrapper = shallow(AlertComponent)

describe('Alert Component should:', () => {
    it('If snapshot true', () => { jExpect(alertWrapper).toMatchSnapshot() })
  })
