class SessionsController < Devise::SessionsController
    
    def destroy
        HomeController.offline(current_user.id) if current_user.online?
        super
    end
    
end