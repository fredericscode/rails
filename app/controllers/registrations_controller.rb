class RegistrationsController < Devise::RegistrationsController

  private

  def sign_up_params
    params.require(:user).permit(:name, :email, :avatar, :github_link, :level, :password)
  end

  def account_update_params
    params.require(:user).permit(:name, :email, :github_link, :level, :avatar, :password)
  end
end