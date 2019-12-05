module HomeHelper
    def links
      if user_signed_in?
        'home/partials/nav/dropdown'
      else
        'home/partials/nav/auth_links'
      end
    end
    
    def developers
        if user_signed_in?
            'home/partials/developers'
        else
            'home/partials/empty'
        end
    end
    
    def btnStart
        if user_signed_in?
            "home/partials/startbtn/scrollbtn"
        else
            "home/partials/startbtn/authbtn"
        end
    end
end
