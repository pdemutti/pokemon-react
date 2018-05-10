import Adapter from 'enzyme-adapter-react-15';
import chai, { expect } from 'chai'
import chaiEnzyme from 'chai-enzyme'
import Enzyme from 'enzyme';
import SearchForm from './searchForm'
import React from 'react'
import { shallow } from 'enzyme'

Enzyme.configure({ adapter: new Adapter() });
chai.use(chaiEnzyme())

 
const jExpect = global.expect

const SearchFormComponent = (
    <SearchForm />
)
const wrapper = shallow(SearchFormComponent)

describe('Search form should:', () => {
  it('If snapshot true', () => { jExpect(wrapper).toMatchSnapshot() })
  
})