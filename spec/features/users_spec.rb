require 'rails_helper'
require 'capybara/rails'

RSpec.feature "Users", type: :feature, js: true do
  context 'Create a new user' do

    scenario 'Should be successful' do
      organization = FactoryBot.create(:organization)

      FactoryBot.create(:super_super_category, :bg)
      super_category = FactoryBot.create(:super_category)
      category = FactoryBot.create(:category)
      appearance = FactoryBot.create(:appearance)
      bg_category = category
      FactoryBot.create(:super_super_category, :hr)
      super_category = FactoryBot.create(:super_category)
      category = FactoryBot.create(:category)
      appearance = FactoryBot.create(:appearance)
      FactoryBot.create(:super_super_category, :tech)
      super_category = FactoryBot.create(:super_category)
      category = FactoryBot.create(:category)
      appearance = FactoryBot.create(:appearance)
      FactoryBot.create(:super_super_category, :supplies)
      super_category = FactoryBot.create(:super_category)
      category = FactoryBot.create(:category)
      appearance = FactoryBot.create(:appearance)
      FactoryBot.create(:super_super_category, :ss)
      super_category = FactoryBot.create(:super_category)
      category = FactoryBot.create(:category)
      appearance = FactoryBot.create(:appearance)

      visit('/users/sign_up')
      fill_in('Email', with: 'john@gs.com')
      select('Good School', from: 'user[organization_id]')
      fill_in('Password', with: 'password')
      fill_in('Password confirmation', with: 'password')

      expect{
        click_on('Sign up')
      }.to change(User, :count).by(1)
    end

    scenario 'Should not be successful' do
      organization = FactoryBot.create(:organization)

      visit('/users/sign_up')
      fill_in('Email', with: 'john@email.com')
      select('Good School', from: 'user[organization_id]')
      fill_in('Password', with: 'password')
      fill_in('Password confirmation', with: 'password')

      click_on('Sign up')

      expect(page).to have_content 'use email affiliated with member school'

    end

  end


end

