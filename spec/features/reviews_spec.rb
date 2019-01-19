require 'rails_helper'
require 'capybara/rails'

RSpec.feature "Reviews", type: :feature, js: true do
  context 'Create new review' do

    scenario 'Should be successful' do
      user = FactoryBot.build(:user)
      user.save(:validate => false)
      login_as(user, :scope => :user)


      visit root_path
      # page.find('.MuiButtonBase-root-77').click
      expect(page).to have_content("")
      # click_button('GO')
      # within('form') do
      # end
      # click_button('Submit')
    end

  end
end

