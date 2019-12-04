module HomeHelper
    def links
      if user_signed_in?
        'home/nav/dropdown'
      else
        'home/nav/auth_links'
      end
    end
end
