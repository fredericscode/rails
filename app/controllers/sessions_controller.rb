class SessionsController < Devise::SessionsController
    
    def destroy
        user_id = current_user.id
        super
        HomeController.offline(user_id) if user.online?
    end
    
end