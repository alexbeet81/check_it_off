class ListPolicy < ApplicationPolicy
  class Scope < Scope
    def resolve
      scope
    end
    def index?
      true
    end
    def show?
      true
    end
    def create?
      record.user == user
    end

    def update
      record.user == user
    end

    def destroy?
      record.user == user
    end
  end
end
