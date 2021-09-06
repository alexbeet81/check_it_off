class ItemPolicy < ApplicationPolicy
  class Scope < Scope
    def resolve
      scope.all
    end
    
    def create?
      record.user == user
    end

    def update?
      true
      # record.user == user
    end

    def destroy?
      record.user == user
    end
  end
end
